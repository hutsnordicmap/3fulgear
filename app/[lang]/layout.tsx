import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PromoBar } from "@/components/promo-bar";
import { Stats } from "@/components/stats";
import { htmlLang, isLang, langs, ogLocale, ui } from "@/lib/i18n";
import { siteGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const description = {
  fi: "Suomenkielinen esittelysivu 3F UL GEAR -sauvateltoista, itsekantavista teltoista ja ultrakevyistä rinkoista. Koodi HUTSNORDIC10 antaa 10 % alennuksen virallisessa kaupassa.",
  sv: "Presentation på svenska av 3F UL GEARs stavtält, fristående tält och ultralätta ryggsäckar. Koden HUTSNORDIC10 ger 10 % rabatt i den officiella butiken.",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: ui[lang].siteName,
      template: `%s | ${ui[lang].siteName}`,
    },
    description: description[lang],
    openGraph: {
      locale: ogLocale[lang],
      siteName: ui[lang].siteName,
      type: "website",
      url: SITE_URL,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} className={`${openSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph(lang)) }}
        />
        <div className="sticky top-0 z-40">
          <PromoBar lang={lang} />
          <Header lang={lang} />
        </div>
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <Stats />
      </body>
    </html>
  );
}
