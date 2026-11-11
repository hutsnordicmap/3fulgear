import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

export const metadata = pageMeta(
  "/oppaat/lanshan-pystytys",
  "Lanshan 2:n pystytys",
  "3F UL GEAR -valmistajan suosittelema Lanshan 2- ja Lanshan 2 Pro -teltan pystytys suomeksi.",
);

const steps = [
  "Levitä teltta maahan ja kiilaa ulkoteltan yksi kulma heti, jotta tuuli ei vie sitä.",
  "Kiilaa viereinen kulma niin, että lyhyt sivu suoristuu, mutta älä kiristä sitä vielä täyteen.",
  "Teltta on kuusikulmio. Jätä absidit huomiotta ja käsittele pohjaa suorakulmiona.",
  "Etsi vastakkainen lyhyt sivu. Tuo sen kaksi kulmaa yhteen, jolloin teltasta tulee tasakylkinen kolmio.",
  "Etsi tämän lyhyen sivun projektion keskipiste maasta ja kohdista se teltan pohjan projektion keskipisteeseen.",
  "Kiilaa toisen lyhyen sivun molemmat päät niin, että pohjasta muodostuu suorakulmio.",
  "Tarkista vinous ja siirrä kiiloja, jos muoto ei ole tasainen.",
  "Nosta vaellussauvat paikalleen. Kiilaa sen jälkeen absidit ja harukset.",
];

export default function PitchPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Lanshan 2:n pystytys</h1>
      <p className="mt-4 leading-7 text-ink/75">
        3F UL GEAR kuvaa tämän vakiotavaksi pystyttää Lanshan 2 ja Lanshan 2 Pro.
        Sama logiikka auttaa muissakin sauvateltoissa, mutta kaarien määrä ja
        absidit vaihtelevat mallin mukaan.
      </p>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-white p-4">
            <span className="font-semibold text-moss">{index + 1}</span>
            <span className="leading-7">{step}</span>
          </li>
        ))}
      </ol>
      <div className="prose-fi mt-8 leading-7 text-ink/85">
        <p>
          Neljän kulman narunkiristimien pitää osoittaa mahdollisimman tarkasti
          sivun harjan suuntaan. Muuten kiila ottaa liikaa vetoa ja voi irrota.
        </p>
        <p>
          Aloittelijan tapaan valmistaja neuvoo käyttämään teltan
          kohdistusnaruja. Tarkempi kuvasarja on alkuperäisessä englanninkielisessä
          ohjeessa.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm font-semibold">
        <a
          href={affiliateUrl("https://3fulgear.com/lanshan-2-lanshan-2-pro-pitching-guide/")}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="underline"
        >
          Valmistajan pystytysopas
        </a>
        <a
          href={affiliateUrl(
            "https://3fulgear.com/2022/02/21/how-to-pitching-your-lanshan-tent-perfectly-official-recommendation/",
          )}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="underline"
        >
          Tarkempi kuvallinen ohje
        </a>
      </div>
    </article>
  );
}
