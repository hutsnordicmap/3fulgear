import type { Metadata } from "next";
import Link from "next/link";
import { getCatalog } from "@/lib/catalog";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl, DISCOUNT_CODE } from "@/lib/site";
import type { Product } from "@/lib/types";

export const metadata: Metadata = pageMeta(
  "/",
  { absolute: "Ultrakevyet teltat ja rinkat | 3F UL GEAR Suomi" },
  "Suomenkielinen opas 3F UL GEAR -sauvatelttoihin, itsekantaviin telttoihin ja ultrakevyisiin rinkkoihin. Koodi HUTSNORDIC10 antaa 10 % alennuksen.",
  "https://3fulgear.com/wp-content/uploads/2023/05/est-1.jpg",
);

const popular = [
  { slug: "lanshan-1", line: "780 g, 1 henkilö, kaksiseinämäinen" },
  { slug: "lanshan2-classic", line: "1120 g, 2 henkilöä, kaksiseinämäinen" },
  { slug: "lanshan-1-pro", line: "690 g, 1 henkilö, yksiseinämäinen" },
  { slug: "lanshan-2-pro", line: "960 g, 2 henkilöä, yksiseinämäinen" },
];

const categories = [
  {
    href: "/kategoria/ultrakevyet-teltat",
    label: "Ultrakevyet teltat",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/ultents.jpg",
  },
  {
    href: "/kategoria/rinkat",
    label: "Ultrakevyet rinkat",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/ulpacks.jpg",
  },
  {
    href: "/kategoria/itsekantavat-teltat",
    label: "Itsekantavat teltat",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/freestanding.jpg",
  },
  {
    href: "/kategoria/kamiinat",
    label: "Autoretki ja kamiina",
    image: "https://3fulgear.com/wp-content/uploads/2024/04/car-camping-tent-stove-1-1.jpg",
  },
];

const stories = [
  {
    title: "Retkikertomus: Gyirong",
    image: "https://3fulgear.com/wp-content/uploads/2025/11/IMG_0075.jpg",
    href: affiliateUrl("https://3fulgear.com/2025/11/07/gyirong-adventure/"),
  },
  {
    title: "Retkikertomus: Zhagana",
    image: "https://3fulgear.com/wp-content/uploads/2025/08/R0110692.jpg",
    href: affiliateUrl("https://3fulgear.com/2025/08/03/adventure-report-zhagana-hiking/"),
  },
  {
    title: "Valkoisen järven lenkki Altailla",
    image: "https://3fulgear.com/wp-content/uploads/2025/03/DSC08347-1.jpg",
    href: affiliateUrl(
      "https://3fulgear.com/2025/03/11/the-nomans-wilderness-the-loop-of-white-lake-in-the-altai-mountains/",
    ),
  },
  {
    title: "Onko Tianshan 45 edullisin ultrakevyt rinkka?",
    image: "https://3fulgear.com/wp-content/uploads/2025/02/Tianshan-2.jpg",
    href: affiliateUrl(
      "https://3fulgear.com/2025/02/25/is-3fulgears-new-tianshan-45-the-best-budget-ultralight-pack/",
    ),
  },
  {
    title: "Retkikertomus: Everestin itäseinä",
    image: "https://3fulgear.com/wp-content/uploads/2025/02/DSC06440-1.jpg",
    href: affiliateUrl(
      "https://3fulgear.com/2025/02/14/adventure-report-everest-east-face-and-kama-valley/",
    ),
  },
  {
    title: "Tianshan-rinkan kokoaminen",
    image: "https://3fulgear.com/wp-content/uploads/2024/12/Tianshan-3fulgear.jpg",
    href: affiliateUrl("https://3fulgear.com/2024/12/12/how-to-assemble-tianshan-backpack/"),
  },
];

function findProduct(catalog: Product[], slug: string) {
  return catalog.find((product) => product.slug === slug);
}

export default async function HomePage() {
  const catalog = await getCatalog();
  const tents = popular
    .map((item) => {
      const product = findProduct(catalog, item.slug);
      return product ? { ...item, product } : null;
    })
    .filter((item) => item != null);

  return (
    <div className="bg-white">
      <section
        className="flex min-h-[420px] items-end bg-cover bg-center md:min-h-[520px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(https://3fulgear.com/wp-content/uploads/2023/05/est-1.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16 text-white">
          <h1 className="max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">
            3F UL GEAR on valmistanut korkealaatuisia ultrakevyitä telttoja vuodesta 2009.
          </h1>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.href} href={category.href} className="group relative block h-36 overflow-hidden sm:h-44">
            <img
              src={category.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
            <span className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center bg-[#161616] px-2 text-center text-[11px] leading-4 font-semibold tracking-[0.12em] text-white uppercase">
              {category.label}
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#777] uppercase">Suosituimmat</p>
        <h2 className="mt-2 text-3xl font-semibold">Ultrakevyet teltat</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tents.map((item) => (
            <Link key={item.slug} href={`/tuote/${item.slug}`} className="group block">
              <img
                src={item.product.images[0]}
                alt={item.product.nameFi}
                className="mx-auto aspect-square w-full max-w-[220px] object-contain"
              />
              <p className="mt-4 text-sm font-semibold tracking-wide uppercase group-hover:text-[#e36159]">
                {item.product.nameFi}
              </p>
              <p className="mt-1 text-xs text-[#777]">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eee]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Tianshan Ultra</h2>
            <p className="mt-4 text-sm leading-7 text-[#777]">
              Tianshan Ultra on rinkka, jonka 3F UL GEAR suunnitteli vuoden 2024
              Tianshan-vaellusta varten. Enimmäiskuorma on noin 19 kg, ja rinkka
              pysyy valmistajan mukaan mukavana noin 15 kg kuormalla. Kangas on
              Ultra200x. Backpacker-sivusto on kuvannut Tianshan-mallia
              luotettavaksi rinkaksi hyvään hintaan.
            </p>
            <Link href="/tuote/tianshan-ultra" className="store-btn mt-6">
              Katso rinkka
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-6.jpg"
              alt="Tianshan Ultra -rinkka"
              className="w-full object-contain"
            />
            <img
              src="https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-1-1.png"
              alt="Tianshan Ultra edestä ja takaa"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[480px] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1)), url(https://3fulgear.com/wp-content/uploads/2024/04/beele2.0-3fulgear-camping.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16">
          <p className="text-4xl font-semibold tracking-wide md:text-6xl">BEETLE 16 2.0</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase">
            Autoretki- ja tukikohtateltta
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Useita kattoikkunoita ja kulkuaukkoja</li>
            <li>Kaarirakenne, jonka 3F UL GEAR on suunnitellut</li>
          </ul>
          <Link href="/tuote/beetle16" className="store-btn-light mt-8">
            Lue lisää
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Ul-keitinjärjestelmä</h2>
          <p className="mt-4 text-sm leading-7 text-[#777]">
            Sprii on helposti saatava polttoaine, ja 3F UL GEAR -valmistajan
            spriikeitin on hyvin kevyt järjestelmä. Keitin vie rinkasta noin
            200–300 g kaasukeitintä vähemmän, ja polttoainetta saa täydennettyä
            taajamissa. Siksi spriikeitin on suosittu pitkillä vaelluksilla.
            BurningFeather-keittimissä on valmistajan mukaan hyvä teho ja
            polttoainetehokkuus.
          </p>
          <Link href="/tuote/burningfeather-ul-alcohol-stove" className="store-btn mt-6">
            Lue lisää
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-[#f7f7f7] p-6">
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/10/BF-S03-alcohol-stove-burn-2-1.jpg"
            alt="BurningFeather-spritikeitin"
            className="w-full object-contain"
          />
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/10/windscreen-for-flat-pot-or-pan.jpg"
            alt="Tuulisuoja ja kattila"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section
        className="flex min-h-[520px] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.05)), url(https://3fulgear.com/wp-content/uploads/2024/10/Taiji1-3FULGEAR.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16">
          <p className="text-5xl font-semibold tracking-wide md:text-7xl">TAIJI 1</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase">
            Kevyt itsekantava teltta
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Täysin itsekantava teltta ilman maastorajoitusta.</li>
            <li>Kevyin valmistajan ilmoittama polkupaino on 1561 g.</li>
          </ul>
          <Link href="/tuote/taiji-1" className="store-btn-light mt-8">
            Lue lisää
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Artikkelit</h2>
          <Link href="/oppaat" className="text-xs font-semibold tracking-[0.14em] uppercase hover:text-[#e36159]">
            Kaikki
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <a key={story.title} href={story.href} target="_blank" rel="sponsored noopener noreferrer" className="group block">
              <img src={story.image} alt="" className="aspect-[16/10] w-full object-cover" />
              <p className="mt-3 text-sm leading-6 font-semibold group-hover:text-[#e36159]">{story.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eee] bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-4 py-10 text-sm leading-6 text-[#777] md:grid-cols-3">
          <p>
            <span className="font-semibold text-[#222]">1. Valitse täällä.</span> Sivusto esittelee valmistajan valikoiman suomeksi.
          </p>
          <p>
            <span className="font-semibold text-[#222]">2. Osta virallisesta kaupasta.</span> Maksu ja toimitus vahvistetaan osoitteessa 3fulgear.com.
          </p>
          <p>
            <span className="font-semibold text-[#222]">3. Koodi {DISCOUNT_CODE}.</span> Koodi antaa 10 % alennuksen valmistajan kassalla.
          </p>
        </div>
      </section>
    </div>
  );
}
