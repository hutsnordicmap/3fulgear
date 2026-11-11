import Link from "next/link";
import { ProductGrid } from "@/components/product-card";
import { getCatalog } from "@/lib/catalog";
import { affiliateUrl, categories, DISCOUNT_CODE } from "@/lib/site";

const featured = ["lanshan-1", "lanshan2-classic", "lanshan-1-pro", "lanshan-2-pro"];

export default async function HomePage() {
  const catalog = await getCatalog();
  const tents = featured
    .map((slug) => catalog.find((product) => product.slug === slug))
    .filter((product) => product != null);
  const tianshan = catalog.find((product) => product.slug === "tianshan-ultra");
  const stove = catalog.find((product) => product.slug === "burningfeather-ul-alcohol-stove");
  const cloud = catalog.find((product) => product.slug === "floating-cloud-2");

  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm tracking-[0.2em] text-paper/60 uppercase">
              Suomenkielinen opas
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-tight font-semibold md:text-6xl">
              Ultrakevyet teltat ja rinkat 3F UL GEAR -valmistajalta
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/80">
              3F UL GEAR on valmistanut edullisia ultrakevyitä retkeilyvarusteita
              vuodesta 2009. Yritys perustettiin vuonna 2008. Tällä sivustolla
              valikoima on suomeksi. Ostos tehdään virallisessa kaupassa, ja koodi{" "}
              {DISCOUNT_CODE} antaa 10 % alennuksen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kategoria/ultrakevyet-teltat"
                className="rounded-full bg-clay px-5 py-3 font-semibold text-white"
              >
                Selaa telttoja
              </Link>
              <Link
                href="/tuotteet"
                className="rounded-full border border-white/25 px-5 py-3 font-semibold"
              >
                Koko valikoima
              </Link>
            </div>
          </div>
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/05/ultents.jpg"
            alt="3F UL GEAR -ultrakevyttelttoja maastossa"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-moss">Valmistajan etusivun kärki</p>
            <h2 className="mt-1 text-3xl font-semibold">Suosituimmat teltat</h2>
          </div>
          <Link href="/kategoria/ultrakevyet-teltat" className="text-sm underline">
            Kaikki teltat
          </Link>
        </div>
        <ProductGrid products={tents} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        {categories.slice(0, 4).map((category) => (
          <Link
            key={category.id}
            href={`/kategoria/${category.path}`}
            className="group relative overflow-hidden rounded-3xl"
          >
            <img
              src={category.image}
              alt=""
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
            <p className="absolute right-4 bottom-4 left-4 text-xl font-semibold text-white">
              {category.title}
            </p>
          </Link>
        ))}
      </section>

      {tianshan ? (
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
            <img
              src={tianshan.images[0]}
              alt={tianshan.nameFi}
              className="aspect-[5/4] w-full rounded-3xl object-cover"
            />
            <div>
              <p className="text-sm text-moss">Rinkka</p>
              <h2 className="mt-2 text-3xl font-semibold">{tianshan.nameFi}</h2>
              <p className="mt-4 leading-7 text-ink/75">{tianshan.summaryFi}</p>
              <Link
                href={`/tuote/${tianshan.slug}`}
                className="mt-6 inline-block rounded-full bg-ink px-5 py-3 font-semibold text-paper"
              >
                Katso rinkka
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 md:grid-cols-2">
        {[stove, cloud].filter((item) => item != null).map((product) => (
          <Link
            key={product.slug}
            href={`/tuote/${product.slug}`}
            className="overflow-hidden rounded-3xl border border-line bg-white"
          >
            <img
              src={product.images[0]}
              alt=""
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{product.nameFi}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/70">
                {product.summaryFi}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-sand px-6 py-8 md:px-10">
          <h2 className="text-2xl font-semibold">Miten osto toimii</h2>
          <ol className="mt-4 grid gap-4 text-sm leading-6 md:grid-cols-3">
            <li>
              <span className="font-semibold">1. Valitse täällä.</span> Sivut
              kertovat tuotteen suomeksi ja näyttävät valmistajan kuvat sekä
              eurohinnan.
            </li>
            <li>
              <span className="font-semibold">2. Siirry viralliseen kauppaan.</span>{" "}
              Maksu, väri ja toimitus vahvistetaan osoitteessa 3fulgear.com.
            </li>
            <li>
              <span className="font-semibold">3. Käytä koodia {DISCOUNT_CODE}.</span>{" "}
              Koodi antaa 10 % alennuksen valmistajan kassalla.
            </li>
          </ol>
          <a
            href={affiliateUrl("https://3fulgear.com/")}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="mt-6 inline-block text-sm font-semibold underline"
          >
            Avaa virallinen kauppa
          </a>
        </div>
      </section>
    </div>
  );
}
