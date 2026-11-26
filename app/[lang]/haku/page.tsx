import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getCatalog, searchProducts } from "@/lib/catalog";
import { href, langOf, ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
};

const text = {
  fi: {
    description: "Haku 3F UL GEAR -tuotteista suomeksi.",
    placeholder: "Esimerkiksi Lanshan tai rinkka",
    button: "Hae",
    results: (count: number, q: string) => `${count} tulosta haulle “${q}”.`,
    empty: "Kirjoita tuotteen tai ryhmän nimi.",
  },
  sv: {
    description: "Sök bland 3F UL GEARs produkter på svenska.",
    placeholder: "Till exempel Lanshan eller ryggsäck",
    button: "Sök",
    results: (count: number, q: string) => `${count} träffar för ”${q}”.`,
    empty: "Skriv namnet på en produkt eller en grupp.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return {
    ...pageMeta(lang, "/haku", ui[lang].search, text[lang].description),
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  const { q = "" } = await searchParams;
  const catalog = await getCatalog(lang);
  const results = searchProducts(catalog, q);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">{ui[lang].search}</h1>
      <form action={href(lang, "/haku")} className="mt-6 flex max-w-xl gap-2">
        <input
          name="q"
          defaultValue={q}
          placeholder={t.placeholder}
          className="w-full border border-[#e7e7e7] bg-white px-4 py-3"
        />
        <button type="submit" className="store-btn">
          {t.button}
        </button>
      </form>
      <p className="mt-6 text-sm text-ink/60">{q ? t.results(results.length, q) : t.empty}</p>
      <div className="mt-8">
        <ProductGrid products={q ? results : []} lang={lang} />
      </div>
    </div>
  );
}
