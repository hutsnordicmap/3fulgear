import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryGuideBlock } from "@/components/category-guide";
import { ProductGrid } from "@/components/product-card";
import { productsInCategory } from "@/lib/catalog";
import { categoryGuides } from "@/lib/guides";
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
  const listed = await productsInCategory(category.id);
  const guide = categoryGuides[category.id];
  const rank = new Map(
    (guide?.table?.rows ?? []).map((row, index) => [row.href, index]),
  );
  const products = [...listed].sort((a, b) => {
    const left = rank.get(`/tuote/${a.slug}`) ?? 1000;
    const right = rank.get(`/tuote/${b.slug}`) ?? 1000;
    if (left !== right) return left - right;
    return a.nameFi.localeCompare(b.nameFi, "fi");
  });

  return (
    <div className="bg-white">
      <section className="border-b border-[#eee]">
        <div className="mx-auto max-w-[1100px] px-4 py-10">
          <h1 className="text-3xl font-semibold tracking-wide uppercase">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777]">{category.intro}</p>
        </div>
      </section>
      {guide ? <CategoryGuideBlock guide={guide} /> : null}
      <div className="mx-auto max-w-[1100px] px-4 py-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
