import Link from "next/link";
import { LOGO_URL } from "@/lib/site";

const links = [
  { href: "/", label: "Etusivu" },
  { href: "/tuotteet", label: "Kauppa" },
  { href: "/kategoria/ultrakevyet-teltat", label: "Ultrakevyet teltat" },
  { href: "/kategoria/itsekantavat-teltat", label: "Itsekantavat" },
  { href: "/kategoria/rinkat", label: "Rinkat" },
  { href: "/kategoria/sadevaatteet", label: "Sadevaatteet" },
  { href: "/kategoria/tarvikkeet", label: "Tarvikkeet" },
  { href: "/kategoria/kamiinat", label: "Kamiinat" },
  { href: "/oppaat", label: "Artikkelit" },
];

export function Header() {
  return (
    <header className="border-b border-[#eee] bg-white text-[#222529]">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0">
          <img src={LOGO_URL} alt="3F UL GEAR" className="h-9 w-auto" />
        </Link>
        <form action="/haku" className="ml-auto hidden md:block">
          <label className="sr-only" htmlFor="q">
            Hae tuotteita
          </label>
          <input
            id="q"
            name="q"
            placeholder="Haku"
            className="w-36 border border-[#e7e7e7] px-3 py-2 text-xs outline-none focus:border-[#222]"
          />
        </form>
        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none border border-[#e7e7e7] px-3 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
            Valikko
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-64 border border-[#e7e7e7] bg-white p-3 shadow-lg">
            <form action="/haku" className="mb-3 md:hidden">
              <input
                name="q"
                placeholder="Haku"
                className="w-full border border-[#e7e7e7] px-3 py-2 text-sm"
              />
            </form>
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-[12px] font-semibold tracking-[0.12em] uppercase hover:text-[#e36159]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
        </div>
        <nav className="hidden items-center justify-center gap-5 border-t border-[#eee] py-3 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.14em] uppercase hover:text-[#e36159]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
