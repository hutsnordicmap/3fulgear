export type GuideTable = {
  headers: string[];
  rows: { href?: string; cells: string[] }[];
};

export type CategoryGuide = {
  title: string;
  paragraphs: string[];
  table?: GuideTable;
  links: { href: string; label: string }[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  lead: string;
  sections: ArticleSection[];
  table?: GuideTable;
  products: { href: string; label: string }[];
};

export const articles: Article[] = [
  {
    slug: "lanshan-1-vai-2",
    title: "Lanshan 1 vai Lanshan 2",
    description:
      "Yhden ja kahden hengen Lanshan-sauvatelttojen paino, tila ja saumat. Vertailu 3F UL GEAR -valmistajan ilmoittamista luvuista.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/LANSHAN-1-4-SEASON.jpg",
    imageAlt: "Lanshan 1 -teltta",
    lead: "Molemmat ovat kaksiseinämäisiä sauvatelttoja. Ero on henkilömäärässä ja siinä, miten valmistaja erittelee painon.",
    sections: [
      {
        heading: "Yksi vai kaksi henkeä",
        paragraphs: [
          "Lanshan 1 on yhden hengen teltta. Vuoden 2026 versiossa on yksi ovi, yksi absidi ja sivulla kolmion muotoinen tila varusteille. Pystytys tehdään yhdellä vaellussauvalla, jonka pituus on valmistajan mukaan 120–125 cm.",
          "Lanshan 2 on kahden hengen volyymimalli. Vuoden 2026 versiossa vetoketju on vedenpitävä, ja sisäteltan lattian saumat on teipattu. Vaellussauvat eivät sisälly kummankaan hintaan.",
        ],
      },
      {
        heading: "Mitä painoluku tarkoittaa",
        paragraphs: [
          "Valmistajan etusivu esittelee Lanshan 1:n noin 780 gramman teltana. Tuotesivun erittely on tarkempi: runko noin 775 g ja polkupaino noin 920 g. Pakkauksen paino riippuu siitä, valitaanko 3 vuodenajan verkkosisäteltta vai 4 vuodenajan umpikankainen sisäteltta.",
          "Lanshan 2:n etusivuluku on noin 1120 g. Tuotesivu erittelee ulkoteltan noin 546 grammaan, rungon noin 1020 grammaan ja polkupainon kiiloineen noin 1152 grammaan. Pelkkä ulkoteltta toimii valmistajan mukaan myös kevyenä suojana, noin 545 g.",
        ],
      },
      {
        heading: "Kangas ja lattia",
        paragraphs: [
          "Lanshan 1:n ulkoteltta on 15D nailonia PU-pinnoitteella. Lattia on 20D PU-nailonia, vesipilari 6000 mm ja ammekorkeus 11 cm. Saumat on teipattu. Aluskangas on erillinen vaihtoehto, ei osa perushintaa.",
          "Koodi HUTSNORDIC10 antaa 10 % alennuksen valmistajan kassalla. Alennus ei muuta sitä, kumpi malli mahtuu retkelle.",
        ],
      },
    ],
    table: {
      headers: ["Malli", "Henkilöt", "Polkupaino", "Saumat"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "1", "noin 920 g", "Teipattu"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "2", "noin 1152 g", "Teipattu"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan-1", label: "Lanshan 1" },
      { href: "/tuote/lanshan2-classic", label: "Lanshan 2" },
      { href: "/oppaat/lanshan-2-vai-pro", label: "Vertaa Pro-malleihin" },
    ],
  },
  {
    slug: "lanshan-2-vai-pro",
    title: "Lanshan 2 vai Lanshan 2 Pro",
    description:
      "Kaksiseinämäinen Lanshan 2 ja yksiseinämäinen Lanshan 2 Pro. Paino, saumojen tiivistys ja se, mitä pakkaus ei sisällä.",
    image: "https://3fulgear.com/wp-content/uploads/2026/01/lanshan-2-pro.jpg",
    imageAlt: "Lanshan 2 Pro -teltta",
    lead: "Lanshan 2 on kaksiseinämäinen. Lanshan 2 Pro on yksiseinämäinen ja kevyempi, mutta saumat tiivistetään itse.",
    sections: [
      {
        heading: "Kaksi seinää vai yksi",
        paragraphs: [
          "Lanshan 2:n ulkoteltta ja sisäteltta ovat erillään. Sisäteltta on joko 3 vuodenajan verkko tai 4 vuodenajan umpikangas. Saumat on teipattu tehtaalla.",
          "Lanshan 2 Pro on yksiseinämäinen. Ovet, myös verkko-ovet, aukeavat kokonaan. Kangas on silnylon tai silpoly, ja vuodenaikavaihtoehtoja on 3 ja 4. Valmistajan etusivu esittelee mallin noin 960 grammana. Tuotesivun minipolupaino on noin 1034 g. Silnylon-runko painaa noin 900 g ja silpoly-runko noin 877 g.",
        ],
      },
      {
        heading: "Mitä pitää tehdä ennen ensimmäistä yötä",
        paragraphs: [
          "Pro-mallin silnylon-saumoja ei teipata tehtaalla. Ne silikonitiivistetään ennen käyttöä. Tiivistysaine ei tule mukana, koska lentorahti rajoittaa sen kuljetusta. Tiivistyksen voi tehdä itse tai tilata valmistajan palveluna.",
          "Kumpikaan pakkaus ei sisällä vaellussauvoja eikä aluskangasta. Aluskangas on kaupassa erillinen, edullisempi rivi, eikä se ole teltan hinta.",
        ],
      },
    ],
    table: {
      headers: ["Malli", "Rakenne", "Paino", "Saumat"],
      rows: [
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Kaksiseinämäinen", "polku noin 1152 g", "Teipattu"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "Yksiseinämäinen", "minipolku noin 1034 g", "Tiivistetään itse"] },
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Kaksiseinämäinen, 1 hlö", "polku noin 920 g", "Teipattu"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "Yksiseinämäinen, 1 hlö", "polku noin 820 g", "Tiivistetään itse"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan2-classic", label: "Lanshan 2" },
      { href: "/tuote/lanshan-2-pro", label: "Lanshan 2 Pro" },
      { href: "/oppaat/saumojen-tiivistys", label: "Saumojen tiivistys" },
    ],
  },
  {
    slug: "sauvateltta-vai-itsekantava",
    title: "Sauvateltta vai itsekantava teltta",
    description:
      "Lanshan-sauvateltta vai Taiji- ja Floating Cloud -itsekantava. Paino, pystytys ja se, milloin kaaret kulkevat mukana.",
    image: "https://3fulgear.com/wp-content/uploads/2024/10/Taiji1-3FULGEAR.jpg",
    imageAlt: "Taiji 1 -teltta niityllä",
    lead: "Sauvateltta lainaa vaellussauvat rungokseen. Itsekantava teltta seisoo omilla kaarillaan, myös ilman kiiloja.",
    sections: [
      {
        heading: "Milloin sauvateltta on kevyempi",
        paragraphs: [
          "Lanshan-sarja pystytetään vaellussauvalla. Sauvat eivät sisälly hintaan, koska ne ovat usein jo rinkassa. Lanshan 1:n polkupaino on noin 920 g ja Lanshan 2:n noin 1152 g kiiloineen. Ilman sauvoja teltta ei seiso.",
          "Taiji 1 on yhden hengen itsekantava kupoli kolmella risteävällä kaarella. Rakenne seisoo ilman kiiloja, mutta narut parantavat pitoa tuulessa. Valmistajan etusivu ilmoittaa kevyimmäksi polkupainoksi 1561 g. Sisä- ja ulkoteltan voi pystyttää yhdessä.",
        ],
      },
      {
        heading: "Kahden hengen mallit",
        paragraphs: [
          "Taiji 2:n ulkoteltta painaa noin 740 g ja minimipolupaino kaarineen, kiiloineen ja naruineen noin 1950 g. Siinä on kaksi ovea, ja aluskangas sisältyy valmistajan kuvauksen mukaan pakettiin.",
          "Floating Cloud 2 painaa polkukunnossa noin 1780 g. Siinä on kaksi ovea ja kaksi absidia. Kaaret painavat noin 530 g, ja mukana tuleva aluskangas noin 232 g.",
          "Itsekantava teltta on paikallaan, kun alusta on kallio, puulava tai muu paikka, johon kiilaa ei saa. Sauvateltta on kevyempi silloin, kun sauvat kulkevat muutenkin mukana ja maahan voi kiilata.",
        ],
      },
    ],
    table: {
      headers: ["Malli", "Rakenne", "Paino", "Pystytys"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Sauvateltta, 1 hlö", "noin 920 g", "Yksi vaellussauva"] },
        { href: "/tuote/taiji-1", cells: ["Taiji 1", "Itsekantava, 1 hlö", "etusivu 1561 g", "Kolme kaarta"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Sauvateltta, 2 hlö", "noin 1152 g", "Vaellussauvat"] },
        { href: "/tuote/floating-cloud-2", cells: ["Floating Cloud 2", "Itsekantava, 2 hlö", "noin 1780 g", "Omat kaaret"] },
        { href: "/tuote/taiji-2", cells: ["Taiji 2", "Itsekantava, 2 hlö", "noin 1950 g", "Kolme kaarta"] },
      ],
    },
    products: [
      { href: "/kategoria/ultrakevyet-teltat", label: "Sauvateltat" },
      { href: "/kategoria/itsekantavat-teltat", label: "Itsekantavat" },
    ],
  },
  {
    slug: "tianshan-rinkka",
    title: "Tianshan-rinkan paino ja kuorma",
    description:
      "Tianshan ja Tianshan Ultra: 45 litraa, noin kilon paino ja 15 kg mukavuuskuorma. Vertailu kehikottomiin rinkkoihin.",
    image: "https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-6.jpg",
    imageAlt: "Tianshan Ultra -rinkka",
    lead: "Tianshan on kehikollinen 45 litran rinkka. Ultra-versio vaihtaa kankaan, ei rinkan kokoa.",
    sections: [
      {
        heading: "Kaksi kangasta, sama kuorma",
        paragraphs: [
          "Tianshan painaa noin 990 g ison lantiovyön kanssa. Tianshan Ultra painaa noin 980 g. Ultra200x on UHMWPE-kuitua ja PE-kalvoa. Valmistaja teippaa siitä noin 90 % saumoista, eikä kankaassa ole DWR-käsittelyä eikä PFAS-yhdisteitä.",
          "Molemmissa mukavuuskuorma on noin 15 kg ja enimmäiskuorma noin 18 kg. Tilavuus on 45 l. Selässä on alumiiniripustus ja tuulettuva selkäpaneeli. Lantiovyön koot ovat S ja L.",
        ],
      },
      {
        heading: "Rinkka tulee litteänä",
        paragraphs: [
          "Rinkka toimitetaan litteänä ja kootaan itse, jotta postitus pysyy kevyenä. Kokoamisohjeen kuvat ovat valmistajan englanninkielisessä artikkelissa. Pitkään sateeseen valmistaja suosittelee Ultra-malliin sisäpussia makuupussille. Upotus veteen voi päästää kosteutta teipatuistakin saumoista.",
        ],
      },
      {
        heading: "Kehikoton vaihtoehto",
        paragraphs: [
          "QiDian 40+16 painaa noin 850 g ja kantaa valmistajan mukaan enintään noin 12 kg. Tilavuus on 40 l plus 16 l. Qidian Pro painaa noin 880 g, vetää 56 l ja kantaa enintään noin 14 kg. Sen selkäpaneelina käytetään makuualustaa, joka ei sisälly hintaan.",
          "Freedom-päiväreppu on noin 460 g ja 20 l. Ilman lantiovyötä valmistaja suosittelee kuorman pysyvän alle 5 kilossa. Tianshan on se rinkka, johon 15 kg retkikuorma on suunniteltu.",
        ],
      },
    ],
    table: {
      headers: ["Rinkka", "Paino", "Tilavuus", "Kuorma"],
      rows: [
        { href: "/tuote/tianshan-pack", cells: ["Tianshan", "noin 990 g", "45 l", "mukavuus 15 kg"] },
        { href: "/tuote/tianshan-ultra", cells: ["Tianshan Ultra", "noin 980 g", "45 l", "mukavuus 15 kg"] },
        { href: "/tuote/qidian", cells: ["QiDian 40+16", "noin 850 g", "40 + 16 l", "enintään 12 kg"] },
        { href: "/tuote/qidian-pro-backpack", cells: ["Qidian Pro", "noin 880 g", "56 l", "enintään 14 kg"] },
        { href: "/tuote/freedom-20l-daypack", cells: ["Freedom 20 l", "noin 460 g", "20 l", "alle 5 kg"] },
      ],
    },
    products: [
      { href: "/tuote/tianshan-ultra", label: "Tianshan Ultra" },
      { href: "/tuote/tianshan-pack", label: "Tianshan" },
      { href: "/kategoria/rinkat", label: "Kaikki rinkat" },
    ],
  },
  {
    slug: "saumojen-tiivistys",
    title: "Lanshan-saumojen tiivistys",
    description:
      "Tavallisen Lanshanin saumat on teipattu. Lanshan Pro -mallin silnylon-saumat silikonitiivistetään ennen ensimmäistä käyttöä.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/lanshan1-pro-award.jpg",
    imageAlt: "Lanshan 1 Pro",
    lead: "Tiivistys koskee yksiseinämäisiä Pro-malleja. Kaksiseinämäisen Lanshanin saumat tulevat tehtaalta teipattuina.",
    sections: [
      {
        heading: "Kumpi malli tarvitsee työn",
        paragraphs: [
          "Lanshan 1 ja Lanshan 2 ovat kaksiseinämäisiä. Niiden saumat on teipattu. Lanshan 2:n vuoden 2026 versiossa myös sisäteltan lattian saumat on teipattu.",
          "Lanshan 1 Pro ja Lanshan 2 Pro ovat yksiseinämäisiä. Valmistaja kertoo, että silnylon-saumoja ei teipata tehtaalla, joten ne silikonitiivistetään ennen käyttöä. Aine ei sisälly toimitukseen lentorahtisääntöjen vuoksi.",
        ],
      },
      {
        heading: "Miten tiivistys hankitaan",
        paragraphs: [
          "Tiivistyksen voi tehdä itse tai tilata valmistajan palveluna. Palvelu on kaupassa erillinen rivi, samoin aluskangas ja vaellussauvat. Ne eivät ole teltan perushintaa.",
          "Koodi HUTSNORDIC10 laskee myös näiden rivien hintaa 10 %, kun koodi syötetään valmistajan kassalla.",
        ],
      },
    ],
    table: {
      headers: ["Malli", "Seinä", "Saumat"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "Kaksois", "Teipattu"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "Kaksois", "Teipattu"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "Yksi", "Silikonitiivistys"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "Yksi", "Silikonitiivistys"] },
      ],
    },
    products: [
      { href: "/tuote/lanshan-1-pro", label: "Lanshan 1 Pro" },
      { href: "/tuote/lanshan-2-pro", label: "Lanshan 2 Pro" },
      { href: "/oppaat/lanshan-pystytys", label: "Pystytysohje" },
    ],
  },
];

export const categoryGuides: Record<string, CategoryGuide> = {
  "ultralight-tent": {
    title: "Miten Lanshan valitaan",
    paragraphs: [
      "Lanshan on sauvateltta. Se pystytetään vaellussauvalla, joka ei sisälly hintaan. Kaksiseinämäisen mallin saumat on teipattu. Yksiseinämäinen Pro tiivistetään silikonilla ennen ensimmäistä yötä.",
      "Etusivun grammaluku on pyöristys. Tuotesivu erittelee rungon ja polkupainon erikseen. Aluskangas näkyy kaupassa omana edullisena rivinään, eikä se ole teltan hinta.",
    ],
    table: {
      headers: ["Malli", "Henkilöt", "Seinä", "Paino"],
      rows: [
        { href: "/tuote/lanshan-1", cells: ["Lanshan 1", "1", "Kaksois", "polku noin 920 g"] },
        { href: "/tuote/lanshan2-classic", cells: ["Lanshan 2", "2", "Kaksois", "polku noin 1152 g"] },
        { href: "/tuote/lanshan-1-pro", cells: ["Lanshan 1 Pro", "1", "Yksi", "polku noin 820 g"] },
        { href: "/tuote/lanshan-2-pro", cells: ["Lanshan 2 Pro", "2", "Yksi", "minipolku noin 1034 g"] },
      ],
    },
    links: [
      { href: "/oppaat/lanshan-1-vai-2", label: "Lanshan 1 vai 2" },
      { href: "/oppaat/lanshan-2-vai-pro", label: "Lanshan 2 vai Pro" },
      { href: "/oppaat/sauvateltta-vai-itsekantava", label: "Sauvateltta vai itsekantava" },
    ],
  },
  "freestanding-tent": {
    title: "Miten itsekantava malli valitaan",
    paragraphs: [
      "Itsekantava teltta seisoo omilla kaarillaan. Taiji seisoo valmistajan mukaan myös ilman kiiloja, mutta narut pitävät sen paremmin tuulessa. Floating Cloud on vaellusteltta ovella ja absidilla.",
      "Kaaret kulkevat pakkauksessa, joten polkupaino on sauvatelttaa korkeampi. Taiji 1:n etusivun kevyin polkupaino on 1561 g. Floating Cloud 2 painaa noin 1780 g ja Taiji 2 noin 1950 g.",
    ],
    table: {
      headers: ["Malli", "Henkilöt", "Ovet", "Paino"],
      rows: [
        { href: "/tuote/taiji-1", cells: ["Taiji 1", "1", "Kupoli, 3 kaarta", "etusivu 1561 g"] },
        { href: "/tuote/floating-cloud-1", cells: ["Floating Cloud 1", "1", "1 ovi, 1 absidi", "Kaaret mukana"] },
        { href: "/tuote/floating-cloud-2", cells: ["Floating Cloud 2", "2", "2 ovea, 2 absidia", "noin 1780 g"] },
        { href: "/tuote/taiji-2", cells: ["Taiji 2", "2", "2 ovea", "noin 1950 g"] },
        { href: "/tuote/taiji3", cells: ["Taiji 3", "3", "2 kulkuaukkoa", "Hinta kaupassa"] },
      ],
    },
    links: [{ href: "/oppaat/sauvateltta-vai-itsekantava", label: "Sauvateltta vai itsekantava" }],
  },
  packs: {
    title: "Miten rinkka valitaan",
    paragraphs: [
      "Tianshan on kehikollinen 45 litran rinkka noin kilon painoisena. Mukavuuskuorma on noin 15 kg. QiDian on kehikoton ja tarkoitettu kevyempään kuormaan. Freedom ja Koala ovat päiväreppuja.",
      "Tianshan toimitetaan litteänä ja kootaan itse. Ultra-versio vaihtaa kankaan Ultra200x-kalvoon, ei rinkan kokoa.",
    ],
    table: {
      headers: ["Rinkka", "Paino", "Tilavuus", "Kuorma"],
      rows: [
        { href: "/tuote/tianshan-ultra", cells: ["Tianshan Ultra", "noin 980 g", "45 l", "mukavuus 15 kg"] },
        { href: "/tuote/tianshan-pack", cells: ["Tianshan", "noin 990 g", "45 l", "mukavuus 15 kg"] },
        { href: "/tuote/qidian-pro-backpack", cells: ["Qidian Pro", "noin 880 g", "56 l", "enintään 14 kg"] },
        { href: "/tuote/qidian", cells: ["QiDian 40+16", "noin 850 g", "40 + 16 l", "enintään 12 kg"] },
        { href: "/tuote/koala-daypack", cells: ["Koala", "noin 524 g", "20 l", "Päiväreppu"] },
        { href: "/tuote/freedom-20l-daypack", cells: ["Freedom", "noin 460 g", "20 l", "alle 5 kg"] },
      ],
    },
    links: [{ href: "/oppaat/tianshan-rinkka", label: "Tianshanin paino ja kuorma" }],
  },
  "rain-gear": {
    title: "Sadetakki ja sadehousut",
    paragraphs: [
      "Sadetakki on malli ilman edessä kulkevaa vetoketjua. Koko L painaa noin 178 g. Kainaloissa on tuuletusvetoketjut, ja leikkaus on väljä kerrosten päälle. Hengittävyydeksi ilmoitetaan 14 000 g/m²/24 h kiinalaisen GB/T-standardin mukaan.",
      "Sadehousut painavat noin 168–182 g koon mukaan. Ne on leikattu niin, että ne voi vetää kenkien yli. Molemmissa on C6-käsittely, joka sisältää PFAS-yhdisteitä. Saumat on teipattu.",
    ],
    links: [
      { href: "/tuote/ultralight-rain-jacket", label: "Sadetakki" },
      { href: "/tuote/ultralight-rain-pants", label: "Sadehousut" },
    ],
  },
  accessories: {
    title: "Mikä on teltta ja mikä on osa",
    paragraphs: [
      "Kaupan edullisimmat rivit ovat usein aluskangas, lisäkaari, kiilat tai tiivistyspalvelu. Ne eivät ole teltan hintaa. Teltan esittelyhinta tällä sivustolla rajaa nämä osat pois.",
      "Spriikeitin on erillinen järjestelmä. BurningFeather on valmistajan ultrakevyt keitin. Kiilat, narut ja aluskankaat täydentävät telttaa, jonka pakkaus ei sisällä kaikkea.",
    ],
    links: [
      { href: "/tuote/burningfeather-ul-alcohol-stove", label: "BurningFeather-keitin" },
      { href: "/oppaat/saumojen-tiivistys", label: "Saumojen tiivistys" },
      { href: "/kategoria/ultrakevyet-teltat", label: "Itse teltat" },
    ],
  },
  stoves: {
    title: "Kamiina vai kuumateltta",
    paragraphs: [
      "Beetle 16 2.0 on suuri tunneliteltta autoleiriin ja kuumateltaksi, ei itse kamiina. Sisälle mahtuu valmistajan mukaan oleilemaan jopa kuusi henkeä. Sen kanssa voi käyttää Tribe-puukamiinaa. Vuoden 2024 kangas on 70D nailonia, ja katossa on kattoikkunoita.",
      "Tribe-kamiinat ja piiput ovat erillisiä tuotteita. Osa kuumateltan painosta on suuri, eikä ilmaisposti koske valmistajan mukaan jokaista tuotetta. Koodi HUTSNORDIC10 toimii kassalla myös tässä ryhmässä.",
    ],
    links: [
      { href: "/tuote/beetle16", label: "Beetle 16 2.0" },
      { href: "/tuote/tribe-wood-stove-titanium-ver", label: "Tribe-kamiina, titaani" },
    ],
  },
  tarps: {
    title: "Laavukankaan koko",
    paragraphs: [
      "Laavukangasta on polyesterinä ja 15D nailonina. Molemmissa on hopeinen UV-pinnoite, UPF yli 50. Nailoninen 3 × 3 m painaa noin 600 g ja polyesterinen noin 750 g. Isommat koot ovat 4 × 3 m ja 5 × 3 m.",
      "Pakettiin kuuluu kangas ja kuusi narua. Kaaret ja kiilat myydään erikseen.",
    ],
    links: [{ href: "/tuote/lightweight-tarp", label: "Kevyt laavukangas" }],
  },
  "repair-parts": {
    title: "Varaosa vai takuutoimitus",
    paragraphs: [
      "Soljet ja muut pienet osat voi ostaa kaupasta. Takuun piiriin kuuluvaan osaan valmistaja pyytää ottamaan yhteyttä ennen tilausta, koska osa niistä lähtee postikulua vastaan eikä tavallisena ostoksena.",
      "Tämä sivu ei käsittele takuuta. Korjauspyyntö menee valmistajalle.",
    ],
    links: [{ href: "/takuu", label: "Takuu ja varaosat" }],
  },
};

export function articleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
