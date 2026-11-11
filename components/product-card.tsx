import Link from "next/link";
import { PriceBlock } from "@/components/price";
import { categoryById } from "@/lib/site";
import type { Product } from "@/lib/types";

function cardText(summary: string) {
  const sentence = summary.split(/(?<=\.)\s/)[0] ?? summary;
  return sentence.length > 180 ? `${sentence.slice(0, 177)}…` : sentence;
}

export function ProductCard({ product }: { product: Product }) {
  const category = categoryById(product.category);
  const image = product.images[0];
  const text = cardText(product.summaryFi);

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
      <Link href={`/tuote/${product.slug}`} className="block bg-sand">
        <div className="aspect-[4/5]">
          {image ? (
            <img
              src={image}
              alt={product.nameFi}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-ink/50">
              {product.nameFi}
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {category ? (
          <p className="text-xs tracking-wide text-ink/50 uppercase">{category.title}</p>
        ) : null}
        <h2 className="text-lg leading-6 font-semibold">
          <Link href={`/tuote/${product.slug}`} className="hover:text-moss">
            {product.nameFi}
          </Link>
        </h2>
        <p className="line-clamp-3 text-sm leading-6 text-ink/70">{text}</p>
        <div className="mt-auto pt-2">
          <PriceBlock product={product} />
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="text-ink/70">Ei tuotteita tällä haulla.</p>;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
