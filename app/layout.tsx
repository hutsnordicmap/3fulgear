import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PromoBar } from "@/components/promo-bar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
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
    "Suomenkielinen esittely 3F UL GEAR -telttoista, rinkoista ja retkivarusteista. 10 % alennus koodilla HUTSNORDIC10 virallisessa kaupassa.",
  openGraph: {
    locale: "fi_FI",
    siteName: "3F UL GEAR Suomi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${sourceSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
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
