import Link from "next/link";
import { affiliateUrl, DISCOUNT_CODE, LOGO_URL } from "@/lib/site";

const official = affiliateUrl("https://3fulgear.com/");

export function Footer() {
  return (
    <footer
      className="relative mt-auto overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,22,45,0.72), rgba(6,22,45,0.72)), url(https://3fulgear.com/wp-content/uploads/2023/05/head2-1.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-16 text-center md:grid-cols-3 md:text-left">
        <div>
          <img
            src={LOGO_URL}
            alt="3F UL GEAR"
            className="mx-auto h-8 w-auto brightness-0 invert md:mx-0"
          />
          <p className="mt-4 text-xs leading-6 text-white/80">
            3fulgear.fi on itsenäinen suomenkielinen esittelysivu. Ostos, maksu ja
            toimitus tapahtuvat valmistajan kaupassa. Koodi {DISCOUNT_CODE} antaa
            10 % alennuksen kassalla.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">Tuotteet</p>
          <ul className="mt-4 space-y-2 text-xs text-white/80">
            <li><Link href="/kategoria/ultrakevyet-teltat" className="hover:text-white">Ultrakevyet teltat</Link></li>
            <li><Link href="/kategoria/rinkat" className="hover:text-white">Rinkat</Link></li>
            <li><Link href="/kategoria/itsekantavat-teltat" className="hover:text-white">Itsekantavat teltat</Link></li>
            <li><Link href="/kategoria/kamiinat" className="hover:text-white">Kamiinat</Link></li>
            <li><Link href="/kategoria/tarvikkeet" className="hover:text-white">Tarvikkeet</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">Tietoa</p>
          <ul className="mt-4 space-y-2 text-xs text-white/80">
            <li><Link href="/yritys" className="hover:text-white">Yritys</Link></li>
            <li><Link href="/oppaat" className="hover:text-white">Artikkelit</Link></li>
            <li><Link href="/takuu" className="hover:text-white">Takuu</Link></li>
            <li><Link href="/toimitus" className="hover:text-white">Toimitus</Link></li>
            <li><Link href="/tietosuoja" className="hover:text-white">Tietosuoja</Link></li>
            <li>
              <a href={official} target="_blank" rel="sponsored noopener noreferrer" className="hover:text-white">
                Virallinen kauppa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-4 py-6 text-center">
          <p className="text-[11px] text-white/70">
            Maksu tapahtuu valmistajan kaupassa. 3F UL GEAR ilmoittaa kauppansa olevan PCI-sertifioitu.
          </p>
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/05/payment300.png"
            alt="Maksutavat valmistajan kaupassa"
            className="h-8 w-auto"
          />
          <p className="text-[11px] text-white/60">
            Mainos. Kuvat ovat valmistajan kuvia. Linkit viralliseen kauppaan ovat affiliate-linkkejä.
          </p>
        </div>
      </div>
    </footer>
  );
}
