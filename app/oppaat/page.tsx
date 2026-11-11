import Link from "next/link";
import { articles } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

const manufacturerNotes = [
  {
    title: "Saumojen tiivistys",
    href: affiliateUrl("https://3fulgear.com/2021/10/13/how-to-seal-your-tent/"),
    text: "Lanshan Pro pitää silikonitiivistää. Tavallisen Lanshanin teipatut saumat eivät tarvitse samaa käsittelyä.",
    image: "https://3fulgear.com/wp-content/uploads/2025/08/lanshan-2-pro-Silpoly-details-3.jpg",
  },
  {
    title: "Lanshan tuulessa",
    href: affiliateUrl(
      "https://3fulgear.com/2022/11/08/how-to-increase-the-protection-of-lanshan-tent-in-windy-days/",
    ),
    text: "Valmistajan ohje, miten Lanshan kiristetään kovemmalla tuulella.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/Lanshan-2-award.jpg",
  },
  {
    title: "Tianshan-rinkan kokoaminen",
    href: affiliateUrl("https://3fulgear.com/2024/12/12/how-to-assemble-tianshan-backpack/"),
    text: "Rinkka toimitetaan litteänä. Kokoamisohje on valmistajan artikkelissa.",
    image: "https://3fulgear.com/wp-content/uploads/2024/12/Tianshan-3fulgear.jpg",
  },
  {
    title: "Telttakankaat",
    href: affiliateUrl(
      "https://3fulgear.com/2021/10/24/tent-fabric-silnylon-vs-pu-nylon-vs-polyester/",
    ),
    text: "Silnylon, PU-nailon ja polyesteri: valmistajan vertailu kompromisseista.",
    image: "https://3fulgear.com/wp-content/uploads/2025/08/lanshan-2-pro-Silpoly.jpg",
  },
  {
    title: "Gyirong, Himalaja",
    href: affiliateUrl("https://3fulgear.com/2025/11/07/gyirong-adventure/"),
    text: "Valmistajan retkikertomus lokakuulta 2025: noin 60 km ja 7 päivää.",
    image: "https://3fulgear.com/wp-content/uploads/2025/11/IMG_0075.jpg",
  },
  {
    title: "Zhagana",
    href: affiliateUrl("https://3fulgear.com/2025/08/03/adventure-report-zhagana-hiking/"),
    text: "Heinäkuun 2025 vaellus Gansussa, noin 60 km ja 4 päivää.",
    image: "https://3fulgear.com/wp-content/uploads/2025/08/R0110692.jpg",
  },
  {
    title: "Tianshan Ultra -arvio",
    href: affiliateUrl(
      "https://3fulgear.com/2025/02/25/is-3fulgears-new-tianshan-45-the-best-budget-ultralight-pack/",
    ),
    text: "Outside ja Backpacker testasivat Tianshan-rinkan. Juttu on englanniksi valmistajan sivuilla.",
    image: "https://3fulgear.com/wp-content/uploads/2025/02/Tianshan-2.jpg",
  },
];

const ownGuides = [
  {
    title: "Lanshan 2:n pystytys",
    href: "/oppaat/lanshan-pystytys",
    text: "Valmistajan suosittelema pystytysjärjestys suomeksi.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/lanshan2-1.jpg",
  },
  ...articles.map((article) => ({
    title: article.title,
    href: `/oppaat/${article.slug}`,
    text: article.lead,
    image: article.image,
  })),
];

export const metadata = pageMeta(
  "/oppaat",
  "Oppaat",
  "Suomenkieliset vertailut ja pystytysohjeet 3F UL GEAR -telttoihin ja rinkkoihin.",
);

function GuideCard({
  title,
  href,
  text,
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
  const body = (
    <>
      <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
      <h2 className="mt-3 text-lg leading-6 font-semibold group-hover:text-[#e36159]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#777]">{text}</p>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="sponsored noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-12">
      <h1 className="text-4xl font-semibold">Oppaat</h1>
      <p className="mt-4 max-w-2xl leading-7 text-ink/75">
        Vertailut ja pystytysohjeet on kirjoitettu tälle sivustolle suomeksi.
        Luvut ovat valmistajan tuotesivuilta. Pitkät retkikertomukset jäävät
        englanniksi valmistajan sivuille.
      </p>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ownGuides.map((article) => (
          <li key={article.href}>
            <GuideCard {...article} />
          </li>
        ))}
      </ul>
      <h2 className="mt-16 text-2xl font-semibold">Valmistajan englanninkieliset jutut</h2>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {manufacturerNotes.map((article) => (
          <li key={article.title}>
            <GuideCard {...article} external />
          </li>
        ))}
      </ul>
    </div>
  );
}
