import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getCatalog } from "@/lib/catalog";
import { categories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Koko valikoima",
  description: "3F UL GEAR -teltat, rinkat, sadevaatteet, kamiinat ja tarvikkeet suomeksi.",
};

export default async function ProductsPage() {
  const catalog = await getCatalog();
  const ordered = [...catalog].sort((a, b) => {
    const left = categories.findIndex((category) => category.id === a.category);
    const right = categories.findIndex((category) => category.id === b.category);
    return left - right || a.nameFi.localeCompare(b.nameFi, "fi");
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Koko valikoima</h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        {ordered.length} tuotetta valmistajan tämänhetkisestä kaupasta. Hinnat ovat
        euroja. Alennuskoodi lasketaan vasta virallisen kaupan kassalla.
      </p>
      <div className="mt-8">
        <ProductGrid products={ordered} />
      </div>
    </div>
  );
}
