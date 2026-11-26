import { cache } from "react";
import copyJson from "@/data/copy.json";
import copySvJson from "@/data/copy.sv.json";
import productsJson from "@/data/products.json";
import type { Lang } from "@/lib/i18n";
import { categoryById } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";
import type { Product, ProductCopy, RawProduct, Variation } from "@/lib/types";

const localProducts = productsJson as RawProduct[];
const localCopy: Record<Lang, Record<string, ProductCopy>> = {
  fi: copyJson as Record<string, ProductCopy>,
  sv: copySvJson as Record<string, ProductCopy>,
};

function fallbackCopy(raw: RawProduct, lang: Lang): ProductCopy {
  const category = categoryById(raw.category, lang);
  const group = category ? category.title.toLowerCase() : "";
  if (lang === "sv") {
    return {
      name: raw.name,
      summary: `${raw.name} hör till sortimentet hos 3F UL GEAR${
        group ? `, gruppen ${group}` : ""
      }. Beskrivningen och det aktuella priset bekräftas i tillverkarens officiella butik.`,
      bullets: [],
    };
  }
  return {
    name: raw.name,
    summary: `${raw.name} kuuluu 3F UL GEAR -valikoimaan${
      group ? `, ryhmään ${group}` : ""
    }. Kuvaus ja ajantasainen hinta vahvistetaan valmistajan virallisessa kaupassa. Tällä sivulla tuote on esitelty suomeksi.`,
    bullets: [],
  };
}

export function toProduct(raw: RawProduct, lang: Lang, copy?: ProductCopy): Product {
  const text = copy ?? localCopy[lang][raw.slug] ?? fallbackCopy(raw, lang);
  return {
    ...raw,
    title: text.name,
    summary: text.summary,
    bullets: text.bullets,
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

// Supabase holds prices and the Finnish text. Swedish text comes from data/copy.sv.json.
function fromRow(row: Record<string, unknown>, lang: Lang): Product {
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
  if (lang !== "fi") return toProduct(raw, lang);
  return toProduct(raw, lang, {
    name: String(row.name_fi || row.name),
    summary: String(row.summary_fi || ""),
    bullets: Array.isArray(row.bullets_fi) ? (row.bullets_fi as string[]) : [],
  });
}

const readRemoteRows = cache(async (): Promise<Record<string, unknown>[] | null> => {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase.from("gear_products").select("*");
  if (error || !data || data.length === 0) return null;
  return data as Record<string, unknown>[];
});

function readLocal(lang: Lang): Product[] {
  return localProducts.map((product) => toProduct(product, lang));
}

function mergeCatalog(remote: Product[] | null, lang: Lang) {
  const merged = new Map(readLocal(lang).map((product) => [product.slug, product]));
  for (const product of remote ?? []) merged.set(product.slug, product);
  return [...merged.values()].sort((a, b) => a.title.localeCompare(b.title, lang));
}

export const getCatalog = cache(async (lang: Lang): Promise<Product[]> => {
  try {
    const rows = await readRemoteRows();
    return mergeCatalog(rows ? rows.map((row) => fromRow(row, lang)) : null, lang);
  } catch {
    return readLocal(lang);
  }
});

export async function getProduct(slug: string, lang: Lang) {
  const catalog = await getCatalog(lang);
  return catalog.find((product) => product.slug === slug) ?? null;
}

export async function productsInCategory(categoryId: string, lang: Lang) {
  const catalog = await getCatalog(lang);
  return catalog.filter((product) => product.category === categoryId);
}

export function searchProducts(catalog: Product[], query: string) {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return catalog;
  return catalog.filter((product) => {
    const haystack = [product.name, product.title, product.summary, product.bullets.join(" "), product.category]
      .join(" ")
      .toLocaleLowerCase();
    return haystack.includes(needle);
  });
}
