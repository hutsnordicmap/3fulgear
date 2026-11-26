import Link from "next/link";
import { href, type Lang } from "@/lib/i18n";
import { affiliateUrl, DISCOUNT_CODE, LOGO_URL } from "@/lib/site";

const official = affiliateUrl("https://3fulgear.com/");

const text = {
  fi: {
    about: `3fulgear.fi on itsenäinen suomenkielinen esittelysivu. Ostos, maksu ja toimitus tapahtuvat valmistajan kaupassa. Koodi ${DISCOUNT_CODE} antaa 10 % alennuksen kassalla.`,
    products: "Tuotteet",
    info: "Tietoa",
    productLinks: [
      ["/kategoria/ultrakevyet-teltat", "Ultrakevyet teltat"],
      ["/kategoria/rinkat", "Rinkat"],
      ["/kategoria/itsekantavat-teltat", "Itsekantavat teltat"],
      ["/kategoria/kamiinat", "Kamiinat"],
      ["/kategoria/tarvikkeet", "Tarvikkeet"],
    ],
    infoLinks: [
      ["/yritys", "Yritys"],
      ["/oppaat", "Artikkelit"],
      ["/takuu", "Takuu"],
      ["/toimitus", "Toimitus"],
      ["/tietosuoja", "Tietosuoja"],
    ],
    official: "Virallinen kauppa",
    payment: "Maksu tapahtuu valmistajan kaupassa. 3F UL GEAR ilmoittaa kauppansa olevan PCI-sertifioitu.",
    paymentAlt: "Maksutavat valmistajan kaupassa",
    ad: "Mainos. Kuvat ovat valmistajan kuvia. Linkit viralliseen kauppaan ovat affiliate-linkkejä.",
  },
  sv: {
    about: `3fulgear.fi är en fristående presentationssida. Köp, betalning och leverans sker i tillverkarens butik. Koden ${DISCOUNT_CODE} ger 10 % rabatt i kassan.`,
    products: "Produkter",
    info: "Information",
    productLinks: [
      ["/kategoria/ultrakevyet-teltat", "Ultralätta tält"],
      ["/kategoria/rinkat", "Ryggsäckar"],
      ["/kategoria/itsekantavat-teltat", "Fristående tält"],
      ["/kategoria/kamiinat", "Kaminer"],
      ["/kategoria/tarvikkeet", "Tillbehör"],
    ],
    infoLinks: [
      ["/yritys", "Företaget"],
      ["/oppaat", "Artiklar"],
      ["/takuu", "Garanti"],
      ["/toimitus", "Leverans"],
      ["/tietosuoja", "Dataskydd"],
    ],
    official: "Officiella butiken",
    payment: "Betalningen sker i tillverkarens butik. 3F UL GEAR uppger att butiken är PCI-certifierad.",
    paymentAlt: "Betalsätt i tillverkarens butik",
    ad: "Reklam. Bilderna är tillverkarens bilder. Länkarna till den officiella butiken är affiliatelänkar.",
  },
};

export function Footer({ lang }: { lang: Lang }) {
  const t = text[lang];
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
          <p className="mt-4 text-xs leading-6 text-white/80">{t.about}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">{t.products}</p>
          <ul className="mt-4 space-y-2 text-xs text-white/80">
            {t.productLinks.map(([path, label]) => (
              <li key={path}><Link href={href(lang, path)} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">{t.info}</p>
          <ul className="mt-4 space-y-2 text-xs text-white/80">
            {t.infoLinks.map(([path, label]) => (
              <li key={path}><Link href={href(lang, path)} className="hover:text-white">{label}</Link></li>
            ))}
            <li>
              <a href={official} target="_blank" rel="sponsored noopener noreferrer" className="hover:text-white">
                {t.official}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-4 py-6 text-center">
          <p className="text-[11px] text-white/70">
            {t.payment}
          </p>
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/05/payment300.png"
            alt={t.paymentAlt}
            className="h-8 w-auto"
          />
          <p className="text-[11px] text-white/60">
            {t.ad}
          </p>
        </div>
      </div>
    </footer>
  );
}
