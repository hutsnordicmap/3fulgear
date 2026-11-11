import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getCatalog, searchProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Haku",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const catalog = await getCatalog();
  const results = searchProducts(catalog, q);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Haku</h1>
      <form action="/haku" className="mt-6 flex max-w-xl gap-2">
        <input
          name="q"
          defaultValue={q}
          placeholder="Esimerkiksi Lanshan tai rinkka"
          className="w-full rounded-full border border-line bg-white px-4 py-3"
        />
        <button type="submit" className="rounded-full bg-ink px-5 font-semibold text-paper">
          Hae
        </button>
      </form>
      <p className="mt-6 text-sm text-ink/60">
        {q ? `${results.length} tulosta haulle “${q}”.` : "Kirjoita tuotteen tai ryhmän nimi."}
      </p>
      <div className="mt-8">
        <ProductGrid products={q ? results : []} />
      </div>
    </div>
  );
}
