import type { Metadata } from "next";
import Link from "next/link";
import { affiliateUrl } from "@/lib/site";

const articles = [
  {
    title: "Lanshan 2:n pystytys",
    href: "/oppaat/lanshan-pystytys",
    text: "Valmistajan suosittelema pystytysjärjestys suomeksi, ja linkki alkuperäiseen ohjeeseen.",
    external: false,
  },
  {
    title: "Saumojen tiivistys",
    href: affiliateUrl("https://3fulgear.com/2021/10/13/how-to-seal-your-tent/"),
    text: "Lanshan Pro pitää silikonitiivistää. Tavallisen Lanshanin teipatut saumat eivät tarvitse samaa käsittelyä.",
    external: true,
  },
  {
    title: "Lanshan tuulessa",
    href: affiliateUrl(
      "https://3fulgear.com/2022/11/08/how-to-increase-the-protection-of-lanshan-tent-in-windy-days/",
    ),
    text: "Valmistajan ohje, miten Lanshan kiristetään kovemmalla tuulella.",
    external: true,
  },
  {
    title: "Tianshan-rinkan kokoaminen",
    href: affiliateUrl("https://3fulgear.com/2024/12/12/how-to-assemble-tianshan-backpack/"),
    text: "Rinkka toimitetaan litteänä. Kokoamisohje on valmistajan artikkelissa.",
    external: true,
  },
  {
    title: "Telttakankaat",
    href: affiliateUrl(
      "https://3fulgear.com/2021/10/24/tent-fabric-silnylon-vs-pu-nylon-vs-polyester/",
    ),
    text: "Silnylon, PU-nailon ja polyesteri: valmistajan vertailu kompromisseista.",
    external: true,
  },
  {
    title: "Gyirong, Himalaja",
    href: affiliateUrl("https://3fulgear.com/2025/11/07/gyirong-adventure/"),
    text: "Valmistajan retkikertomus lokakuulta 2025: noin 60 km ja 7 päivää.",
    external: true,
  },
  {
    title: "Zhagana",
    href: affiliateUrl("https://3fulgear.com/2025/08/03/adventure-report-zhagana-hiking/"),
    text: "Heinäkuun 2025 vaellus Gansussa, noin 60 km ja 4 päivää.",
    external: true,
  },
  {
    title: "Tianshan Ultra -arvio",
    href: affiliateUrl(
      "https://3fulgear.com/2025/02/25/is-3fulgears-new-tianshan-45-the-best-budget-ultralight-pack/",
    ),
    text: "Outside ja Backpacker testasivat Tianshan-rinkan. Juttu on englanniksi valmistajan sivuilla.",
    external: true,
  },
];

export const metadata: Metadata = {
  title: "Oppaat",
  description:
    "Suomenkieliset tiivistelmät 3F UL GEAR -valmistajan pystytysohjeista ja retkikertomuksista.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Oppaat</h1>
      <p className="mt-4 leading-7 text-ink/75">
        Pitkät retkikertomukset ja yksityiskohtaiset ohjeet julkaistaan
        valmistajan sivuilla englanniksi. Tähän on koottu suomenkielinen
        tiivistelmä ja linkki alkuperäiseen, jotta kuvia ja pitkiä artikkeleita
        ei kopioida uudelleen.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {articles.map((article) => (
          <li key={article.title} className="py-5">
            {article.external ? (
              <a
                href={article.href}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="text-xl font-semibold hover:text-moss"
              >
                {article.title}
              </a>
            ) : (
              <Link href={article.href} className="text-xl font-semibold hover:text-moss">
                {article.title}
              </Link>
            )}
            <p className="mt-2 text-sm leading-6 text-ink/70">{article.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
