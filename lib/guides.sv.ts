import type { Article, CategoryGuide } from "@/lib/guides";

export const articles: Article[] = [
  {
    slug: "lanshan-1-vai-2",
    title: "Lanshan 1 eller Lanshan 2",
    description:
      "Vikt, utrymme och sömmar hos stavtälten Lanshan för en och två personer. En jämförelse av de siffror som 3F UL GEAR själva uppger.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/LANSHAN-1-4-SEASON.jpg",
    imageAlt: "Tältet Lanshan 1",
    lead: "Båda är dubbelväggiga stavtält. Skillnaden ligger i antalet personer och i hur tillverkaren specificerar vikten.",
    sections: [
      {
        heading: "En eller två personer",
        paragraphs: [
          "Lanshan 1 är ett tält för en person. Versionen från 2026 har en dörr, en absid och ett triangelformat utrymme för utrustning på sidan. Tältet sätts upp med en vandringsstav, vars längd enligt tillverkaren är 120–125 cm.",
          "Lanshan 2 är en rymligare modell för två personer. I versionen från 2026 är blixtlåset vattentätt och sömmarna i innertältets golv är tejpade. Vandringsstavar ingår inte i priset för något av tälten.",
        ],
      },
      {
        heading: "Vad viktuppgiften betyder",
        paragraphs: [
          "Tillverkarens startsida presenterar Lanshan 1 som ett tält på cirka 780 gram. Specifikationen på produktsidan är noggrannare: stommen väger cirka 775 g och vikten på leden är cirka 920 g. Packningens vikt beror på om man väljer ett innertält av nät för tre säsonger eller ett innertält av tätt tyg för fyra säsonger.",
          "Uppgiften på startsidan för Lanshan 2 är cirka 1120 g. Produktsidan specificerar yttertältet till cirka 546 gram, stommen till cirka 1020 gram och vikten på leden med tältpinnar till cirka 1152 gram. Enbart yttertältet fungerar enligt tillverkaren också som ett lätt skydd, cirka 545 g.",
        ],
      },
      {
        heading: "Tyg och golv",
        paragraphs: [
          "Yttertältet på Lanshan 1 är 15D-nylon med PU-beläggning. Golvet är 20D PU-nylon, vattenpelaren 6000 mm och badkarshöjden 11 cm. Sömmarna är tejpade. Underlag (footprint) är ett separat tillval och ingår inte i grundpriset.",
          "Koden HUTSNORDIC10 ger 10 % rabatt i tillverkarens kassa. Rabatten ändrar inte vilken modell som får plats på turen.",
        ],
      },
    ],
    table: {
      headers: ["Modell", "Personer", "Vikt på leden", "Sömmar"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "1", "cirka 920 g", "Tejpade"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "2", "cirka 1152 g", "Tejpade"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan-1", label: "Lanshan 1" },
      { href: "/tuote/lanshan2-classic", label: "Lanshan 2" },
      { href: "/oppaat/lanshan-2-vai-pro", label: "Jämför med Pro-modellerna" },
    ],
  },
  {
    slug: "lanshan-2-vai-pro",
    title: "Lanshan 2 eller Lanshan 2 Pro",
    description:
      "Dubbelväggiga Lanshan 2 och enkelväggiga Lanshan 2 Pro. Vikt, tätning av sömmarna och vad som inte ingår i paketet.",
    image: "https://3fulgear.com/wp-content/uploads/2026/01/lanshan-2-pro.jpg",
    imageAlt: "Tältet Lanshan 2 Pro",
    lead: "Lanshan 2 är dubbelväggigt. Lanshan 2 Pro är enkelväggigt och lättare, men sömmarna tätar man själv.",
    sections: [
      {
        heading: "Två väggar eller en",
        paragraphs: [
          "Yttertältet och innertältet på Lanshan 2 är åtskilda. Innertältet är antingen ett nät för tre säsonger eller ett tätt tyg för fyra säsonger. Sömmarna är tejpade på fabriken.",
          "Lanshan 2 Pro är enkelväggigt. Dörrarna, också nätdörrarna, öppnas helt. Tyget är silnylon eller silpoly, och det finns alternativ för tre och fyra säsonger. Tillverkarens startsida presenterar modellen som cirka 960 gram. Minivikten på leden på produktsidan är cirka 1034 g. Stommen i silnylon väger cirka 900 g och stommen i silpoly cirka 877 g.",
        ],
      },
      {
        heading: "Vad som måste göras före första natten",
        paragraphs: [
          "Silnylonsömmarna på Pro-modellen tejpas inte på fabriken. De tätas med silikon före användning. Tätningsmedlet följer inte med, eftersom flygfrakten begränsar transporten av det. Tätningen kan man göra själv eller beställa som en tjänst av tillverkaren.",
          "Inget av paketen innehåller vandringsstavar eller underlag. Underlaget är en separat, billigare rad i butiken och ingår inte i tältets pris.",
        ],
      },
    ],
    table: {
      headers: ["Modell", "Konstruktion", "Vikt", "Sömmar"],
      rows: [
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Dubbelväggigt", "cirka 1152 g", "Tejpade"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "Enkelväggigt", "minimivikt cirka 1034 g", "Tätas av köparen"] },
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Dubbelväggigt, 1 pers.", "cirka 920 g", "Tejpade"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "Enkelväggigt, 1 pers.", "cirka 820 g", "Tätas av köparen"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan2-classic", label: "Lanshan 2" },
      { href: "/tuote/lanshan-2-pro", label: "Lanshan 2 Pro" },
      { href: "/oppaat/saumojen-tiivistys", label: "Tätning av sömmar" },
    ],
  },
  {
    slug: "sauvateltta-vai-itsekantava",
    title: "Stavtält eller fristående tält",
    description:
      "Stavtältet Lanshan eller de fristående Taiji och Floating Cloud. Vikt, uppsättning och när bågarna följer med.",
    image: "https://3fulgear.com/wp-content/uploads/2024/10/Taiji1-3FULGEAR.jpg",
    imageAlt: "Tältet Taiji 1 på en äng",
    lead: "Ett stavtält lånar vandringsstavarna som stomme. Ett fristående tält står på sina egna bågar, också utan tältpinnar.",
    sections: [
      {
        heading: "När ett stavtält är lättare",
        paragraphs: [
          "Lanshan-serien sätts upp med en vandringsstav. Stavarna ingår inte i priset, eftersom de ofta redan finns i ryggsäcken. Vikten på leden är cirka 920 g för Lanshan 1 och cirka 1152 g för Lanshan 2 med tältpinnar. Utan stavar står tältet inte.",
          "Taiji 1 är en fristående kupol för en person med tre korsande bågar. Konstruktionen står utan tältpinnar, men linorna ger bättre fäste i vind. Tillverkarens startsida anger den lättaste vikten på leden till 1561 g. Inner- och yttertältet kan sättas upp tillsammans.",
        ],
      },
      {
        heading: "Modeller för två personer",
        paragraphs: [
          "Yttertältet på Taiji 2 väger cirka 740 g och minivikten på leden med bågar, tältpinnar och linor är cirka 1950 g. Det har två dörrar, och enligt tillverkarens beskrivning ingår underlag i paketet.",
          "Floating Cloud 2 väger cirka 1780 g med allt för leden. Det har två dörrar och två absider. Bågarna väger cirka 530 g och det medföljande underlaget cirka 232 g.",
          "Ett fristående tält passar när underlaget är berg, en trätrall eller något annat ställe där man inte kan sätta tältpinnar. Ett stavtält är lättare när stavarna ändå följer med och man kan sätta pinnar i marken.",
        ],
      },
    ],
    table: {
      headers: ["Modell", "Konstruktion", "Vikt", "Uppsättning"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Stavtält, 1 pers.", "cirka 920 g", "En vandringsstav"] },
        { href: "/tuote/taiji-1", cells: ["Taiji 1", "Fristående, 1 pers.", "startsidan 1561 g", "Tre bågar"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Stavtält, 2 pers.", "cirka 1152 g", "Vandringsstavar"] },
        { href: "/tuote/floating-cloud-2", cells: ["Floating Cloud 2", "Fristående, 2 pers.", "cirka 1780 g", "Egna bågar"] },
        { href: "/tuote/taiji-2", cells: ["Taiji 2", "Fristående, 2 pers.", "cirka 1950 g", "Tre bågar"] },
      ],
    },
    products: [
      { href: "/kategoria/ultrakevyet-teltat", label: "Stavtält" },
      { href: "/kategoria/itsekantavat-teltat", label: "Fristående tält" },
    ],
  },
  {
    slug: "tianshan-rinkka",
    title: "Tianshan-ryggsäckens vikt och last",
    description:
      "Tianshan och Tianshan Ultra: 45 liter, en vikt på cirka ett kilo och 15 kg bekväm last. Jämförelse med ryggsäckar utan ram.",
    image: "https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-6.jpg",
    imageAlt: "Ryggsäcken Tianshan Ultra",
    lead: "Tianshan är en ryggsäck på 45 liter med ram. Ultra-versionen byter tyg, inte ryggsäckens storlek.",
    sections: [
      {
        heading: "Två tyger, samma last",
        paragraphs: [
          "Tianshan väger cirka 990 g med det stora höftbältet. Tianshan Ultra väger cirka 980 g. Ultra200x är UHMWPE-fiber och PE-film. Tillverkaren tejpar cirka 90 % av sömmarna, och tyget har ingen DWR-behandling och inga PFAS-ämnen.",
          "För båda är den bekväma lasten cirka 15 kg och den maximala lasten cirka 18 kg. Volymen är 45 l. På ryggen finns ett upphängningssystem av aluminium och en ventilerad ryggpanel. Höftbältet finns i storlekarna S och L.",
        ],
      },
      {
        heading: "Ryggsäcken kommer platt",
        paragraphs: [
          "Ryggsäcken levereras platt och monteras själv, så att postpaketet förblir lätt. Bilderna till monteringsanvisningen finns i tillverkarens engelskspråkiga artikel. Vid långvarigt regn rekommenderar tillverkaren en innerpåse för sovsäcken i Ultra-modellen. Om man doppar den i vatten kan fukt komma in även genom de tejpade sömmarna.",
        ],
      },
      {
        heading: "Alternativet utan ram",
        paragraphs: [
          "QiDian 40+16 väger cirka 850 g och bär enligt tillverkaren högst cirka 12 kg. Volymen är 40 l plus 16 l. Qidian Pro väger cirka 880 g, rymmer 56 l och bär högst cirka 14 kg. Som ryggpanel används ett liggunderlag, som inte ingår i priset.",
          "Dagsryggsäcken Freedom väger cirka 460 g och rymmer 20 l. Utan höftbälte rekommenderar tillverkaren att lasten hålls under 5 kilo. Tianshan är den ryggsäck som är gjord för 15 kg turlast.",
        ],
      },
    ],
    table: {
      headers: ["Ryggsäck", "Vikt", "Volym", "Last"],
      rows: [
        { href: "/tuote/tianshan-pack", cells: ["Tianshan", "cirka 990 g", "45 l", "bekväm 15 kg"] },
        { href: "/tuote/tianshan-ultra", cells: ["Tianshan Ultra", "cirka 980 g", "45 l", "bekväm 15 kg"] },
        { href: "/tuote/qidian", cells: ["QiDian 40+16", "cirka 850 g", "40 + 16 l", "högst 12 kg"] },
        { href: "/tuote/qidian-pro-backpack", cells: ["Qidian Pro", "cirka 880 g", "56 l", "högst 14 kg"] },
        { href: "/tuote/freedom-20l-daypack", cells: ["Freedom 20 l", "cirka 460 g", "20 l", "under 5 kg"] },
      ],
    },
    products: [
      { href: "/tuote/tianshan-ultra", label: "Tianshan Ultra" },
      { href: "/tuote/tianshan-pack", label: "Tianshan" },
      { href: "/kategoria/rinkat", label: "Alla ryggsäckar" },
    ],
  },
  {
    slug: "saumojen-tiivistys",
    title: "Tätning av sömmarna på Lanshan",
    description:
      "Sömmarna på vanliga Lanshan är tejpade. Silnylonsömmarna på Lanshan Pro tätas med silikon före första användningen.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/lanshan1-pro-award.jpg",
    imageAlt: "Lanshan 1 Pro",
    lead: "Tätningen gäller de enkelväggiga Pro-modellerna. Sömmarna på dubbelväggiga Lanshan kommer tejpade från fabriken.",
    sections: [
      {
        heading: "Vilken modell kräver arbetet",
        paragraphs: [
          "Lanshan 1 och Lanshan 2 är dubbelväggiga. Deras sömmar är tejpade. På Lanshan 2 i versionen från 2026 är också sömmarna i innertältets golv tejpade.",
          "Lanshan 1 Pro och Lanshan 2 Pro är enkelväggiga. Tillverkaren uppger att silnylonsömmarna inte tejpas på fabriken, så de tätas med silikon före användning. Ämnet ingår inte i leveransen på grund av reglerna för flygfrakt.",
        ],
      },
      {
        heading: "Hur man ordnar tätningen",
        paragraphs: [
          "Tätningen kan man göra själv eller beställa som en tjänst av tillverkaren. Tjänsten är en separat rad i butiken, liksom underlag och vandringsstavar. De ingår inte i tältets grundpris.",
          "Koden HUTSNORDIC10 sänker också priset på de här raderna med 10 % när koden anges i tillverkarens kassa.",
        ],
      },
    ],
    table: {
      headers: ["Modell", "Vägg", "Sömmar"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Dubbel", "Tejpade"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Dubbel", "Tejpade"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "Enkel", "Silikontätning"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "Enkel", "Silikontätning"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan-1-pro", label: "Lanshan 1 Pro" },
      { href: "/tuote/lanshan-2-pro", label: "Lanshan 2 Pro" },
      { href: "/oppaat/lanshan-pystytys", label: "Uppsättningsanvisning" },
    ],
  },
];

export const categoryGuides: Record<string, CategoryGuide> = {
  "ultralight-tent": {
    title: "Så väljer man Lanshan",
    paragraphs: [
      "Lanshan är ett stavtält. Det sätts upp med en vandringsstav, som inte ingår i priset. Sömmarna på den dubbelväggiga modellen är tejpade. Den enkelväggiga Pro-modellen tätas med silikon före första natten.",
      "Gramtalet på startsidan är avrundat. Produktsidan specificerar stommen och vikten på leden separat. Underlaget syns i butiken som en egen billig rad och är inte tältets pris.",
    ],
    table: {
      headers: ["Modell", "Personer", "Vägg", "Vikt"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "1", "Dubbel", "cirka 920 g"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "2", "Dubbel", "cirka 1152 g"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "1", "Enkel", "cirka 820 g"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "2", "Enkel", "minimivikt cirka 1034 g"] },
      ],
    },
    links: [
      { href: "/oppaat/lanshan-1-vai-2", label: "Lanshan 1 eller 2" },
      { href: "/oppaat/lanshan-2-vai-pro", label: "Lanshan 2 eller Pro" },
      { href: "/oppaat/sauvateltta-vai-itsekantava", label: "Stavtält eller fristående" },
    ],
  },
  "freestanding-tent": {
    title: "Så väljer man en fristående modell",
    paragraphs: [
      "Ett fristående tält står på sina egna bågar. Enligt tillverkaren står Taiji också utan tältpinnar, men linorna håller det bättre i vind. Floating Cloud är ett vandringstält med dörr och absid.",
      "Bågarna ingår i paketet, så vikten på leden är högre än för ett stavtält. Den lättaste vikten på leden för Taiji 1 på startsidan är 1561 g. Floating Cloud 2 väger cirka 1780 g och Taiji 2 cirka 1950 g.",
    ],
    table: {
      headers: ["Modell", "Personer", "Dörrar", "Vikt"],
      rows: [
        { href: "/tuote/taiji-1", cells: ["Taiji 1", "1", "Kupol, 3 bågar", "startsidan 1561 g"] },
        { href: "/tuote/floating-cloud-1", cells: ["Floating Cloud 1", "1", "1 dörr, 1 absid", "Bågarna ingår"] },
        { href: "/tuote/floating-cloud-2", cells: ["Floating Cloud 2", "2", "2 dörrar, 2 absider", "cirka 1780 g"] },
        { href: "/tuote/taiji-2", cells: ["Taiji 2", "2", "2 dörrar", "cirka 1950 g"] },
        { href: "/tuote/taiji3", cells: ["Taiji 3", "3", "2 ingångar", "Pris i butiken"] },
      ],
    },
    links: [{ href: "/oppaat/sauvateltta-vai-itsekantava", label: "Stavtält eller fristående" }],
  },
  packs: {
    title: "Så väljer man ryggsäck",
    paragraphs: [
      "Tianshan är en ryggsäck på 45 liter med ram och väger cirka ett kilo. Den bekväma lasten är cirka 15 kg. QiDian saknar ram och är avsedd för lättare last. Freedom och Koala är dagsryggsäckar.",
      "Tianshan levereras platt och monteras själv. Ultra-versionen byter tyg till Ultra200x-film, inte ryggsäckens storlek.",
    ],
    table: {
      headers: ["Ryggsäck", "Vikt", "Volym", "Last"],
      rows: [
        { href: "/tuote/tianshan-ultra", cells: ["Tianshan Ultra", "cirka 980 g", "45 l", "bekväm 15 kg"] },
        { href: "/tuote/tianshan-pack", cells: ["Tianshan", "cirka 990 g", "45 l", "bekväm 15 kg"] },
        { href: "/tuote/qidian-pro-backpack", cells: ["Qidian Pro", "cirka 880 g", "56 l", "högst 14 kg"] },
        { href: "/tuote/qidian", cells: ["QiDian 40+16", "cirka 850 g", "40 + 16 l", "högst 12 kg"] },
        { href: "/tuote/koala-daypack", cells: ["Koala", "cirka 524 g", "20 l", "Dagsryggsäck"] },
        { href: "/tuote/freedom-20l-daypack", cells: ["Freedom", "cirka 460 g", "20 l", "under 5 kg"] },
      ],
    },
    links: [{ href: "/oppaat/tianshan-rinkka", label: "Tianshans vikt och last" }],
  },
  "rain-gear": {
    title: "Regnjacka och regnbyxor",
    paragraphs: [
      "Regnjackan är en modell utan blixtlås på framsidan. Storlek L väger cirka 178 g. Under armarna finns ventilationsblixtlås, och passformen är rymlig så att den går över lager under. Andningsförmågan anges till 14 000 g/m²/24 h enligt den kinesiska GB/T-standarden.",
      "Regnbyxorna väger cirka 168–182 g beroende på storlek. De är skurna så att de kan dras på över skorna. Båda har C6-behandling, som innehåller PFAS-ämnen. Sömmarna är tejpade.",
    ],
    links: [
      { href: "/tuote/ultralight-rain-jacket", label: "Regnjacka" },
      { href: "/tuote/ultralight-rain-pants", label: "Regnbyxor" },
    ],
  },
  accessories: {
    title: "Vad som är tält och vad som är tillbehör",
    paragraphs: [
      "De billigaste raderna i butiken är ofta underlag, extra båge, tältpinnar eller tätningstjänst. De är inte tältets pris. Tältets visningspris på den här sidan utesluter dessa delar.",
      "Spritköket är ett separat system. BurningFeather är tillverkarens ultralätta kök. Tältpinnar, linor och underlag kompletterar ett tält vars paket inte innehåller allt.",
    ],
    links: [
      { href: "/tuote/burningfeather-ul-alcohol-stove", label: "BurningFeather-köket" },
      { href: "/oppaat/saumojen-tiivistys", label: "Tätning av sömmar" },
      { href: "/kategoria/ultrakevyet-teltat", label: "Själva tälten" },
    ],
  },
  stoves: {
    title: "Kamin eller varmtält",
    paragraphs: [
      "Beetle 16 2.0 är ett stort tunneltält för bilcamping och som varmtält, inte själva kaminen. Enligt tillverkaren får upp till sex personer plats där inne. Med det kan man använda vedkaminen Tribe. Tyget från 2024 är 70D-nylon, och i taket finns takfönster.",
      "Tribe-kaminerna och rören är separata produkter. En del av varmtältets vikt är stor, och gratis frakt gäller enligt tillverkaren inte alla produkter. Koden HUTSNORDIC10 fungerar i kassan också i den här gruppen.",
    ],
    links: [
      { href: "/tuote/beetle16", label: "Beetle 16 2.0" },
      { href: "/tuote/tribe-wood-stove-titanium-ver", label: "Tribe-kamin, titan" },
    ],
  },
  tarps: {
    title: "Tarpens storlek",
    paragraphs: [
      "Tarp finns i polyester och i 15D-nylon. Båda har en silverfärgad UV-beläggning, UPF över 50. Nylon i 3 × 3 m väger cirka 600 g och polyester cirka 750 g. De större storlekarna är 4 × 3 m och 5 × 3 m.",
      "I paketet ingår tyget och sex linor. Bågar och tältpinnar säljs separat.",
    ],
    links: [{ href: "/tuote/lightweight-tarp", label: "Lätt tarp" }],
  },
  "repair-parts": {
    title: "Reservdel eller garantileverans",
    paragraphs: [
      "Spännen och andra små delar kan man köpa i butiken. För en del som omfattas av garantin ber tillverkaren att man tar kontakt före beställning, eftersom en del av dem skickas mot portokostnad och inte som ett vanligt köp.",
      "Den här sidan handlar inte om garantin. En reparationsbegäran går till tillverkaren.",
    ],
    links: [{ href: "/takuu", label: "Garanti och reservdelar" }],
  },
};
