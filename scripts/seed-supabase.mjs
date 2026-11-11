import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the shell before seeding. The website itself only needs the anon key.",
  );
  process.exit(1);
}

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const products = JSON.parse(readFileSync(resolve(root, "data/products.json"), "utf8"));
const copy = JSON.parse(readFileSync(resolve(root, "data/copy.json"), "utf8"));

const rows = products.map((product) => {
  const text = copy[product.slug] ?? { name: product.name, summary: "", bullets: [] };
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    name_fi: text.name,
    category: product.category,
    permalink: product.permalink,
    images: product.images,
    in_stock: product.inStock,
    on_sale: product.onSale,
    variations: product.variations,
    eur_summary: product.eurSummary,
    summary_fi: text.summary,
    bullets_fi: text.bullets,
    updated_at: new Date().toISOString(),
  };
});

const response = await fetch(`${url}/rest/v1/gear_products?on_conflict=slug`, {
  method: "POST",
  headers: {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates",
  },
  body: JSON.stringify(rows),
});

if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}

console.log(`Upserted ${rows.length} products.`);
