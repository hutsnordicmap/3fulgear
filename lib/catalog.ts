import { cache } from "react";
import copyJson from "@/data/copy.json";
import productsJson from "@/data/products.json";
import { categoryById } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";
import type { Product, ProductCopy, RawProduct, Variation } from "@/lib/types";

const localProducts = productsJson as RawProduct[];
const localCopy = copyJson as Record<string, ProductCopy>;

function fallbackCopy(raw: RawProduct): ProductCopy {
  const category = categoryById(raw.category);
  return {
    name: raw.name,
    summary: `${raw.name} kuuluu 3F UL GEAR -valikoimaan${
      category ? `, ryhmään ${category.title.toLowerCase()}` : ""
    }. Kuvaus ja ajantasainen hinta vahvistetaan valmistajan virallisessa kaupassa. Tällä sivulla tuote on esitelty suomeksi.`,
    bullets: [],
  };
}

export function toProduct(raw: RawProduct, copy?: ProductCopy): Product {
  const text = copy ?? localCopy[raw.slug] ?? fallbackCopy(raw);
  return {
    ...raw,
    nameFi: text.name,
    summaryFi: text.summary,
    bulletsFi: text.bullets,
    variations: (raw.variations ?? []).map((item) => ({
      label: item.label,
      price: Number(item.price),
      regular: Number(item.regular || item.price),
      inStock: Boolean(item.inStock),
    })),
    eurSummary: (raw.eurSummary ?? []).map(Number),
    images: raw.images ?? [],
  };
}

function fromRow(row: Record<string, unknown>): Product {
  const raw: RawProduct = {
    id: Number(row.id ?? 0),
    slug: String(row.slug),
    name: String(row.name),
    category: String(row.category),
    permalink: String(row.permalink),
    images: Array.isArray(row.images) ? (row.images as string[]) : [],
    inStock: Boolean(row.in_stock),
    onSale: Boolean(row.on_sale),
    variations: Array.isArray(row.variations) ? (row.variations as Variation[]) : [],
    eurSummary: Array.isArray(row.eur_summary) ? (row.eur_summary as number[]) : [],
  };
  return toProduct(raw, {
    name: String(row.name_fi || row.name),
    summary: String(row.summary_fi || ""),
    bullets: Array.isArray(row.bullets_fi) ? (row.bullets_fi as string[]) : [],
  });
}

async function readRemote(): Promise<Product[] | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase.from("gear_products").select("*");
  if (error || !data || data.length === 0) return null;
  return data.map((row) => fromRow(row as Record<string, unknown>));
}

function readLocal(): Product[] {
  return localProducts.map((product) => toProduct(product));
}

function mergeCatalog(remote: Product[] | null) {
  const merged = new Map(readLocal().map((product) => [product.slug, product]));
  for (const product of remote ?? []) merged.set(product.slug, product);
  return [...merged.values()].sort((a, b) =>
    a.nameFi.localeCompare(b.nameFi, "fi"),
  );
}

export const getCatalog = cache(async (): Promise<Product[]> => {
  try {
    return mergeCatalog(await readRemote());
  } catch {
    return readLocal();
  }
});

export async function getProduct(slug: string) {
  const catalog = await getCatalog();
  return catalog.find((product) => product.slug === slug) ?? null;
}

export async function productsInCategory(categoryId: string) {
  const catalog = await getCatalog();
  return catalog.filter((product) => product.category === categoryId);
}

export function searchProducts(catalog: Product[], query: string) {
  const needle = query.trim().toLocaleLowerCase("fi");
  if (!needle) return catalog;
  return catalog.filter((product) => {
    const haystack = [
      product.name,
      product.nameFi,
      product.summaryFi,
      product.bulletsFi.join(" "),
      product.category,
    ]
      .join(" ")
      .toLocaleLowerCase("fi");
    return haystack.includes(needle);
  });
}
