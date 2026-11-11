import Link from "next/link";
import { affiliateUrl, categories, DISCOUNT_CODE } from "@/lib/site";

const official = affiliateUrl("https://3fulgear.com/");

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold">3fulgear.fi</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/75">
            Itsenäinen suomenkielinen esittelysivu 3F UL GEAR -varusteista. Ostos,
            maksu ja toimitus tapahtuvat valmistajan kaupassa. Koodi {DISCOUNT_CODE}{" "}
            antaa 10 % alennuksen kassalla.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Valikoima</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            {categories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <Link href={`/kategoria/${category.path}`} className="hover:text-white">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Tietoa</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            <li>
              <Link href="/yritys" className="hover:text-white">
                Yritys
              </Link>
            </li>
            <li>
              <Link href="/toimitus" className="hover:text-white">
                Toimitus
              </Link>
            </li>
            <li>
              <Link href="/takuu" className="hover:text-white">
                Takuu
              </Link>
            </li>
            <li>
              <Link href="/oppaat" className="hover:text-white">
                Oppaat
              </Link>
            </li>
            <li>
              <Link href="/tietosuoja" className="hover:text-white">
                Tietosuoja
              </Link>
            </li>
            <li>
              <a
                href={official}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="hover:text-white"
              >
                Virallinen kauppa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-5 text-paper/60">
          Mainos. 3fulgear.fi ei ole 3F UL GEAR -valmistajan oma kauppa. Linkit
          viralliseen kauppaan ovat affiliate-linkkejä, joista sivuston ylläpitäjä
          voi saada provision. Kuvat ovat valmistajan tuotekuvia.
        </p>
      </div>
    </footer>
  );
}
