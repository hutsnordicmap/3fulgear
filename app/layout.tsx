import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PromoBar } from "@/components/promo-bar";
import { siteGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "3F UL GEAR Suomi",
    template: "%s | 3F UL GEAR Suomi",
  },
  description:
    "Suomenkielinen esittely 3F UL GEAR -sauvateltoista, itsekantavista teltoista ja ultrakevyistä rinkoista. Koodi HUTSNORDIC10 antaa 10 % alennuksen virallisessa kaupassa.",
  openGraph: {
    locale: "fi_FI",
    siteName: "3F UL GEAR Suomi",
    type: "website",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${openSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }}
        />
        <div className="sticky top-0 z-40">
          <PromoBar />
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
