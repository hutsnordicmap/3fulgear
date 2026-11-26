import type { Metadata } from "next";
import Link from "next/link";
import { guidesFor } from "@/lib/guides";
import { href, langOf, ui, type Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const manufacturerNotes = [
  {
    href: affiliateUrl("https://3fulgear.com/2021/10/13/how-to-seal-your-tent/"),
    image: "https://3fulgear.com/wp-content/uploads/2025/08/lanshan-2-pro-Silpoly-details-3.jpg",
    fi: {
      title: "Saumojen tiivistys",
      text: "Lanshan Pro pitää silikonitiivistää. Tavallisen Lanshanin teipatut saumat eivät tarvitse samaa käsittelyä.",
    },
    sv: {
      title: "Täta sömmarna",
      text: "Lanshan Pro ska tätas med silikon. Den vanliga Lanshans tejpade sömmar behöver inte samma behandling.",
    },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2022/11/08/how-to-increase-the-protection-of-lanshan-tent-in-windy-days/"),
    image: "https://3fulgear.com/wp-content/uploads/2021/10/Lanshan-2-award.jpg",
    fi: { title: "Lanshan tuulessa", text: "Valmistajan ohje, miten Lanshan kiristetään kovemmalla tuulella." },
    sv: { title: "Lanshan i blåsväder", text: "Tillverkarens råd om hur Lanshan spänns upp när det blåser hårdare." },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2024/12/12/how-to-assemble-tianshan-backpack/"),
    image: "https://3fulgear.com/wp-content/uploads/2024/12/Tianshan-3fulgear.jpg",
    fi: {
      title: "Tianshan-rinkan kokoaminen",
      text: "Rinkka toimitetaan litteänä. Kokoamisohje on valmistajan artikkelissa.",
    },
    sv: {
      title: "Så monteras Tianshan-ryggsäcken",
      text: "Ryggsäcken levereras platt. Monteringsanvisningen finns i tillverkarens artikel.",
    },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2021/10/24/tent-fabric-silnylon-vs-pu-nylon-vs-polyester/"),
    image: "https://3fulgear.com/wp-content/uploads/2025/08/lanshan-2-pro-Silpoly.jpg",
    fi: { title: "Telttakankaat", text: "Silnylon, PU-nailon ja polyesteri: valmistajan vertailu kompromisseista." },
    sv: { title: "Tältdukar", text: "Silnylon, PU-nylon och polyester: tillverkarens jämförelse av för- och nackdelar." },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2025/11/07/gyirong-adventure/"),
    image: "https://3fulgear.com/wp-content/uploads/2025/11/IMG_0075.jpg",
    fi: { title: "Gyirong, Himalaja", text: "Valmistajan retkikertomus lokakuulta 2025: noin 60 km ja 7 päivää." },
    sv: { title: "Gyirong, Himalaya", text: "Tillverkarens turberättelse från oktober 2025: cirka 60 km och 7 dagar." },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2025/08/03/adventure-report-zhagana-hiking/"),
    image: "https://3fulgear.com/wp-content/uploads/2025/08/R0110692.jpg",
    fi: { title: "Zhagana", text: "Heinäkuun 2025 vaellus Gansussa, noin 60 km ja 4 päivää." },
    sv: { title: "Zhagana", text: "Vandring i Gansu i juli 2025, cirka 60 km och 4 dagar." },
  },
  {
    href: affiliateUrl("https://3fulgear.com/2025/02/25/is-3fulgears-new-tianshan-45-the-best-budget-ultralight-pack/"),
    image: "https://3fulgear.com/wp-content/uploads/2025/02/Tianshan-2.jpg",
    fi: {
      title: "Tianshan Ultra -arvio",
      text: "Outside ja Backpacker testasivat Tianshan-rinkan. Juttu on englanniksi valmistajan sivuilla.",
    },
    sv: {
      title: "Recension av Tianshan Ultra",
      text: "Outside och Backpacker testade Tianshan-ryggsäcken. Artikeln finns på engelska på tillverkarens webbplats.",
    },
  },
];

const text = {
  fi: {
    title: "Oppaat",
    description: "Suomenkieliset vertailut ja pystytysohjeet 3F UL GEAR -telttoihin ja rinkkoihin.",
    intro:
      "Vertailut ja pystytysohjeet on kirjoitettu tälle sivustolle suomeksi. Luvut ovat valmistajan tuotesivuilta. Pitkät retkikertomukset jäävät englanniksi valmistajan sivuille.",
    pitchText: "Valmistajan suosittelema pystytysjärjestys suomeksi.",
    manufacturer: "Valmistajan englanninkieliset jutut",
  },
  sv: {
    title: "Guider",
    description: "Jämförelser och anvisningar för att resa 3F UL GEARs tält, och om ryggsäckarna, på svenska.",
    intro:
      "Jämförelserna och anvisningarna är skrivna för den här webbplatsen. Siffrorna kommer från tillverkarens produktsidor. Längre turberättelser finns på engelska på tillverkarens webbplats.",
    pitchText: "Den ordning som tillverkaren rekommenderar för att resa tältet, på svenska.",
    manufacturer: "Tillverkarens artiklar på engelska",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/oppaat", text[lang].title, text[lang].description);
}

function GuideCard({
  title,
  href: link,
  text: body,
  image,
  external = false,
}: {
  title: string;
  href: string;
  text: string;
  image: string;
  external?: boolean;
}) {
  const className = "group block";
  const content = (
    <>
      <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
      <h2 className="mt-3 text-lg leading-6 font-semibold group-hover:text-[#e36159]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
    </>
  );

  return external ? (
    <a href={link} target="_blank" rel="sponsored noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={link} className={className}>
      {content}
    </Link>
  );
}

function ownGuides(lang: Lang) {
  return [
    {
      title: ui[lang].pitchGuide,
      href: href(lang, "/oppaat/lanshan-pystytys"),
      text: text[lang].pitchText,
      image: "https://3fulgear.com/wp-content/uploads/2023/05/lanshan2-1.jpg",
    },
    ...guidesFor(lang).articles.map((article) => ({
      title: article.title,
      href: href(lang, `/oppaat/${article.slug}`),
      text: article.lead,
      image: article.image,
    })),
  ];
}

export default async function GuidesPage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-12">
      <h1 className="text-4xl font-semibold">{t.title}</h1>
      <p className="mt-4 max-w-2xl leading-7 text-ink/75">{t.intro}</p>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ownGuides(lang).map((article) => (
          <li key={article.href}>
            <GuideCard {...article} />
          </li>
        ))}
      </ul>
      <h2 className="mt-16 text-2xl font-semibold">{t.manufacturer}</h2>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {manufacturerNotes.map((note) => (
          <li key={note.href}>
            <GuideCard href={note.href} image={note.image} {...note[lang]} external />
          </li>
        ))}
      </ul>
    </div>
  );
}
