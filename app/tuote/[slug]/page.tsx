import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { PriceBlock } from "@/components/price";
import { ProductGrid } from "@/components/product-card";
import { getCatalog, getProduct } from "@/lib/catalog";
import { formatRange, priceView, translateLabel } from "@/lib/pricing";
import { breadcrumbLd, pageMeta, withCode } from "@/lib/seo";
import { affiliateUrl, categoryById, discounted, DISCOUNT_CODE, formatEur, SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  const catalog = await getCatalog();
  return catalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Tuote" };
  const category = categoryById(product.category);
  const title = category ? `${product.nameFi} – ${category.title.toLocaleLowerCase("fi")}` : product.nameFi;
  return pageMeta(
    `/tuote/${product.slug}`,
    title,
    withCode(product.summaryFi),
    product.images[0],
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const category = categoryById(product.category);
  const catalog = await getCatalog();
  const related = catalog
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
  const buyUrl = affiliateUrl(product.permalink);
  const view = priceView(product);
  const codePrice =
    view.min == null
      ? undefined
      : `Hinta valmistajan kaupassa. Koodi ${DISCOUNT_CODE} antaa 10 % alennuksen kassalla${
          view.max != null && view.max - view.min > 0.01
            ? `, jolloin haarukka on ${formatEur(discounted(view.min))}–${formatEur(discounted(view.max))}`
            : `, jolloin hinta on ${formatEur(discounted(view.min))}`
        }.`;
  const availability = product.inStock
    ? "https://schema.org/InStock"
    : "https://schema.org/OutOfStock";
  const offer =
    view.min == null
      ? undefined
      : view.max != null && view.max - view.min > 0.01
        ? {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: view.min.toFixed(2),
            highPrice: view.max.toFixed(2),
            availability,
            url: buyUrl,
            seller: { "@type": "Organization", name: "3F UL GEAR" },
            description: codePrice,
          }
        : {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: view.min.toFixed(2),
            availability,
            url: buyUrl,
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: "3F UL GEAR" },
            description: codePrice,
          };
  const crumbs = [
    { name: "Valikoima", path: "/tuotteet" },
    ...(category ? [{ name: category.title, path: `/kategoria/${category.path}` }] : []),
    { name: product.nameFi, path: `/tuote/${product.slug}` },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.nameFi,
        sku: product.slug,
        inLanguage: "fi-FI",
        brand: { "@type": "Brand", name: "3F UL GEAR" },
        image: product.images,
        description: product.summaryFi,
        url: `${SITE_URL}/tuote/${product.slug}`,
        offers: offer,
      },
      breadcrumbLd(crumbs),
    ],
  };

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm text-ink/60">
        <Link href="/tuotteet" className="hover:underline">
          Valikoima
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={`/kategoria/${category.path}`} className="hover:underline">
              {category.title}
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Gallery images={product.images} alt={product.nameFi} />
        <div>
          <h1 className="text-4xl font-semibold">{product.nameFi}</h1>
          <p className="mt-2 text-sm text-ink/50">{product.name}</p>
          <div className="mt-6">
            <PriceBlock product={product} large />
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Hinta on haettu valmistajan kaupasta euroina ja voi muuttua. 10 %
            alennus tulee kassalla koodilla {DISCOUNT_CODE}.
          </p>
          <a
            href={buyUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="store-btn mt-6"
          >
            Osta virallisesta kaupasta
          </a>
          {!product.inStock ? (
            <p className="mt-3 text-sm text-clay">Tarkista saatavuus kaupasta.</p>
          ) : null}
          <div className="prose-fi mt-8 text-base leading-7 text-ink/85">
            {product.summaryFi.split(/\n+/).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          {product.bulletsFi.length > 0 ? (
            <ul className="mt-6 space-y-2 text-sm leading-6">
              {product.bulletsFi.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {product.variations.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Vaihtoehdot virallisessa kaupassa</h2>
          <div className="mt-4 overflow-x-auto border border-[#e7e7e7] bg-white">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b border-line text-ink/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Vaihtoehto</th>
                  <th className="px-4 py-3 font-medium">Hinta</th>
                  <th className="px-4 py-3 font-medium">Koodilla</th>
                </tr>
              </thead>
              <tbody>
                {product.variations.map((variation) => (
                  <tr key={`${variation.label}-${variation.price}`} className="border-b border-line/70">
                    <td className="px-4 py-3">{translateLabel(variation.label) || "Perusmalli"}</td>
                    <td className="px-4 py-3">
                      {variation.regular > variation.price + 0.01 ? (
                        <span className="mr-2 text-ink/40 line-through">
                          {formatEur(variation.regular)}
                        </span>
                      ) : null}
                      {formatEur(variation.price)}
                    </td>
                    <td className="px-4 py-3 text-moss">{formatEur(discounted(variation.price))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {view.min != null && view.max != null ? (
            <p className="mt-3 text-sm text-ink/60">
              Teltan tai rinkan esittelyhinta sivun yläreunassa on{" "}
              {formatRange(view.min, view.max, formatEur)}. Edullisimmat rivit voivat
              olla aluskangas, lisäkaari tai muu osa.
            </p>
          ) : null}
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Samasta ryhmästä</h2>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </div>
  );
}
