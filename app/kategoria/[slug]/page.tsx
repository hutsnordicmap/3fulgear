import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-card";
import { productsInCategory } from "@/lib/catalog";
import { pageMeta, withCode } from "@/lib/seo";
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
  return pageMeta(
    `/kategoria/${category.path}`,
    category.title,
    withCode(category.intro),
    category.image,
  );
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
    <div className="bg-white">
      <section className="border-b border-[#eee]">
        <div className="mx-auto max-w-[1100px] px-4 py-10">
          <h1 className="text-3xl font-semibold tracking-wide uppercase">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777]">{category.intro}</p>
        </div>
      </section>
      <div className="mx-auto max-w-[1100px] px-4 py-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
