import type { Metadata } from "next";
import { langOf, ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const text = {
  fi: {
    description: "3F UL GEAR -valmistajan suosittelema Lanshan 2- ja Lanshan 2 Pro -teltan pystytys suomeksi.",
    intro:
      "3F UL GEAR kuvaa tämän vakiotavaksi pystyttää Lanshan 2 ja Lanshan 2 Pro. Sama logiikka auttaa muissakin sauvateltoissa, mutta kaarien määrä ja absidit vaihtelevat mallin mukaan.",
    steps: [
      "Levitä teltta maahan ja kiilaa ulkoteltan yksi kulma heti, jotta tuuli ei vie sitä.",
      "Kiilaa viereinen kulma niin, että lyhyt sivu suoristuu, mutta älä kiristä sitä vielä täyteen.",
      "Teltta on kuusikulmio. Jätä absidit huomiotta ja käsittele pohjaa suorakulmiona.",
      "Etsi vastakkainen lyhyt sivu. Tuo sen kaksi kulmaa yhteen, jolloin teltasta tulee tasakylkinen kolmio.",
      "Etsi tämän lyhyen sivun projektion keskipiste maasta ja kohdista se teltan pohjan projektion keskipisteeseen.",
      "Kiilaa toisen lyhyen sivun molemmat päät niin, että pohjasta muodostuu suorakulmio.",
      "Tarkista vinous ja siirrä kiiloja, jos muoto ei ole tasainen.",
      "Nosta vaellussauvat paikalleen. Kiilaa sen jälkeen absidit ja harukset.",
    ],
    notes: [
      "Neljän kulman narunkiristimien pitää osoittaa mahdollisimman tarkasti sivun harjan suuntaan. Muuten kiila ottaa liikaa vetoa ja voi irrota.",
      "Aloittelijan tapaan valmistaja neuvoo käyttämään teltan kohdistusnaruja. Tarkempi kuvasarja on alkuperäisessä englanninkielisessä ohjeessa.",
    ],
    guide: "Valmistajan pystytysopas",
    photos: "Tarkempi kuvallinen ohje",
  },
  sv: {
    description: "Så reser du Lanshan 2 och Lanshan 2 Pro på det sätt som tillverkaren 3F UL GEAR rekommenderar, på svenska.",
    intro:
      "3F UL GEAR beskriver detta som standardsättet att resa Lanshan 2 och Lanshan 2 Pro. Samma logik hjälper också med andra stavtält, men antalet stänger och absider varierar mellan modellerna.",
    steps: [
      "Bred ut tältet på marken och sätt genast en tältpinne i ett hörn av yttertältet, så att vinden inte tar det.",
      "Sätt fast hörnet bredvid så att kortsidan rätas ut, men spänn den inte helt ännu.",
      "Tältet är en sexhörning. Bortse från absiderna och behandla botten som en rektangel.",
      "Leta upp den motsatta kortsidan. För ihop dess två hörn, så att tältet bildar en likbent triangel.",
      "Leta upp mittpunkten av den här kortsidans projektion på marken och rikta in den mot mittpunkten av tältbottnens projektion.",
      "Sätt fast båda ändarna av den andra kortsidan så att botten bildar en rektangel.",
      "Kontrollera att tältet inte står snett och flytta tältpinnarna om formen inte är jämn.",
      "Res vandringsstavarna. Sätt sedan fast absiderna och stormlinorna.",
    ],
    notes: [
      "Linsträckarna i de fyra hörnen ska peka så exakt som möjligt i samma riktning som sidans nock. Annars tar tältpinnen för mycket belastning och kan lossna.",
      "För nybörjare rekommenderar tillverkaren att man använder tältets inriktningslinor. En mer detaljerad bildserie finns i den ursprungliga anvisningen på engelska.",
    ],
    guide: "Tillverkarens guide för att resa tältet",
    photos: "Mer detaljerad anvisning med bilder",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/oppaat/lanshan-pystytys", ui[lang].pitchGuide, text[lang].description);
}

export default async function PitchPage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">{ui[lang].pitchGuide}</h1>
      <p className="mt-4 leading-7 text-ink/75">{t.intro}</p>
      <ol className="mt-8 space-y-4">
        {t.steps.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-white p-4">
            <span className="font-semibold text-moss">{index + 1}</span>
            <span className="leading-7">{step}</span>
          </li>
        ))}
      </ol>
      <div className="prose-fi mt-8 leading-7 text-ink/85">
        {t.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm font-semibold">
        <a
          href={affiliateUrl("https://3fulgear.com/lanshan-2-lanshan-2-pro-pitching-guide/")}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="underline"
        >
          {t.guide}
        </a>
        <a
          href={affiliateUrl(
            "https://3fulgear.com/2022/02/21/how-to-pitching-your-lanshan-tent-perfectly-official-recommendation/",
          )}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="underline"
        >
          {t.photos}
        </a>
      </div>
    </article>
  );
}
