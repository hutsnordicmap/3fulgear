#!/usr/bin/env python3
"""Write supabase/seed.sql so it can be pasted into the Supabase SQL editor."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
products = json.loads((ROOT / "data/products.json").read_text())
copy = json.loads((ROOT / "data/copy.json").read_text())


def sql_text(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def sql_json(value: object) -> str:
    return sql_text(json.dumps(value, ensure_ascii=False)) + "::jsonb"


rows = []
for product in products:
    text = copy.get(product["slug"], {"name": product["name"], "summary": "", "bullets": []})
    rows.append(
        "("
        + ", ".join(
            [
                str(int(product["id"])),
                sql_text(product["slug"]),
                sql_text(product["name"]),
                sql_text(text["name"]),
                sql_text(product["category"]),
                sql_text(product["permalink"]),
                sql_json(product["images"]),
                "true" if product["inStock"] else "false",
                "true" if product["onSale"] else "false",
                sql_json(product["variations"]),
                sql_json(product["eurSummary"]),
                sql_text(text["summary"]),
                sql_json(text["bullets"]),
            ]
        )
        + ")"
    )

statement = """-- Fill gear_products. Safe to run again in the huts.fi project.
insert into public.gear_products (
  id, slug, name, name_fi, category, permalink, images, in_stock, on_sale,
  variations, eur_summary, summary_fi, bullets_fi
) values
"""
statement += ",\n".join(rows)
statement += """
on conflict (slug) do update set
  id = excluded.id,
  name = excluded.name,
  name_fi = excluded.name_fi,
  category = excluded.category,
  permalink = excluded.permalink,
  images = excluded.images,
  in_stock = excluded.in_stock,
  on_sale = excluded.on_sale,
  variations = excluded.variations,
  eur_summary = excluded.eur_summary,
  summary_fi = excluded.summary_fi,
  bullets_fi = excluded.bullets_fi,
  updated_at = now();
"""

out = ROOT / "supabase" / "seed.sql"
out.write_text(statement)
print(f"wrote {out} ({out.stat().st_size} bytes, {len(rows)} rows)")
