#!/usr/bin/env python3
"""Refresh data/products.json from the public 3F UL GEAR storefront.

Prices are read in EUR (?currency=EUR), which is what the official shop shows
after a currency switch. Product copy lives in data/copy.json and is not touched.
"""

from __future__ import annotations

import json
import re
import urllib.request
import concurrent.futures
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "products.json"
API = "https://3fulgear.com/wp-json/wc/store/v1/products?per_page=100"
SKIP = {"after-sale-service-shipping-cost", "customised-shipping"}

ATTR_RE = re.compile(r"&quot;attribute_[^&]*&quot;:&quot;(.*?)&quot;")
VAR_RE = re.compile(
    r"&quot;attributes&quot;:\{(.*?)\}.*?&quot;display_price&quot;:([0-9.]+),&quot;display_regular_price&quot;:([0-9.]+).*?&quot;is_in_stock&quot;:(true|false)",
    re.S,
)


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "fi-FI,fi;q=0.9"},
    )
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode("utf-8", "ignore")


def variations_from(raw: str) -> list[dict]:
    start = raw.find("data-product_variations")
    if start < 0:
        return []
    section = raw[start : raw.find("</form>", start)].replace("\\/", "/")
    found = []
    for match in VAR_RE.finditer(section):
        labels = [unescape(part) for part in ATTR_RE.findall(match.group(1))]
        found.append(
            {
                "label": " / ".join(labels),
                "price": float(match.group(2)),
                "regular": float(match.group(3)),
                "inStock": match.group(4) == "true",
            }
        )
    return found


def summary_prices(raw: str, product_id: int) -> list[float]:
    token = f'data-product-id=\\"{product_id}\\"'
    index = raw.find(token)
    if index < 0:
        return []
    chunk = raw[index : index + 900].replace("\\/", "/")
    numbers = re.findall(
        r"(?:&euro;|€)(?:<\\/span>|</span>)([0-9]+(?:\.[0-9]+)?)",
        chunk,
    )
    return [float(number) for number in numbers[:4]]


def page_bits(product: dict) -> tuple[list[dict], list[float]]:
    url = product["permalink"]
    url += "&" if "?" in url else "?"
    url += "currency=EUR"
    raw = fetch(url)
    return variations_from(raw), summary_prices(raw, product["id"])


def main() -> None:
    products = json.loads(fetch(API))
    catalog = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(page_bits, product): product for product in products}
        scraped = {}
        for future in concurrent.futures.as_completed(futures):
            product = futures[future]
            variations, summary = future.result()
            scraped[product["slug"]] = (variations, summary)
            print(f"{product['slug']:42} variations={len(variations):2} summary={summary[:3]}")

    for product in products:
        if product["slug"] in SKIP:
            continue
        variations, summary = scraped[product["slug"]]
        images: list[str] = []
        for image in product.get("images") or []:
            src = image.get("src")
            if src and src not in images:
                images.append(src)
        category = product["categories"][0] if product["categories"] else {"slug": "muut", "name": "Muu"}
        catalog.append(
            {
                "id": product["id"],
                "slug": product["slug"],
                "name": unescape(product["name"]),
                "category": category["slug"],
                "permalink": product["permalink"],
                "images": images[:8],
                "inStock": bool(product["is_in_stock"]),
                "onSale": bool(product["on_sale"]),
                "variations": variations,
                "eurSummary": summary,
            }
        )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {len(catalog)} products to {OUT}")


if __name__ == "__main__":
    main()
