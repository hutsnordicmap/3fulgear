import Link from "next/link";
import { PriceBlock } from "@/components/price";
import { href, ui, type Lang } from "@/lib/i18n";
import type { Product } from "@/lib/types";

function cardText(summary: string) {
  const sentence = summary.split(/(?<=\.)\s/)[0] ?? summary;
  return sentence.length > 140 ? `${sentence.slice(0, 137)}…` : sentence;
}

export function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const image = product.images[0];
  const text = cardText(product.summary);
  const link = href(lang, `/tuote/${product.slug}`);

  return (
    <article className="flex flex-col bg-white">
      <Link href={link} className="block bg-[#f7f7f7]">
        <div className="aspect-square">
          {image ? (
            <img
              src={image}
              alt={product.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-[#777]">
              {product.title}
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          <Link href={link} className="hover:text-[#e36159]">
            {product.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#777]">{text}</p>
        <div className="mt-auto pt-3">
          <PriceBlock product={product} lang={lang} />
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products, lang }: { products: Product[]; lang: Lang }) {
  if (products.length === 0) {
    return <p className="text-[#777]">{ui[lang].noProducts}</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} lang={lang} />
      ))}
    </div>
  );
}
