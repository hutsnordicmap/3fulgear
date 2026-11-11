import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-card";
import { productsInCategory } from "@/lib/catalog";
import { categories, categoryByPath } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.path }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryByPath(slug);
  if (!category) return { title: "Tuoteryhmä" };
  return { title: category.title, description: category.intro };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryByPath(slug);
  if (!category) notFound();
  const products = await productsInCategory(category.id);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-paper">
        <img
          src={category.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-semibold md:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-paper/90">{category.intro}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
