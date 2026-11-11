import Link from "next/link";
import { categories, LOGO_URL } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="shrink-0">
          <img
            src={LOGO_URL}
            alt="3F UL GEAR"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <nav className="hidden flex-1 items-center gap-4 text-sm lg:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/kategoria/${category.path}`}
              className="whitespace-nowrap text-paper/80 hover:text-white"
            >
              {category.menu}
            </Link>
          ))}
          <Link href="/oppaat" className="text-paper/80 hover:text-white">
            Oppaat
          </Link>
          <Link href="/yritys" className="text-paper/80 hover:text-white">
            Yritys
          </Link>
        </nav>
        <form action="/haku" className="ml-auto hidden min-w-40 sm:block">
          <label className="sr-only" htmlFor="q">
            Hae tuotteita
          </label>
          <input
            id="q"
            name="q"
            placeholder="Hae tuotetta"
            className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-paper outline-none placeholder:text-paper/50 focus:border-white/40"
          />
        </form>
        <details className="relative ml-auto sm:ml-0 lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-white/20 px-3 py-2 text-sm">
            Valikko
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-line bg-paper p-3 text-ink shadow-xl">
            <form action="/haku" className="mb-3 sm:hidden">
              <input
                name="q"
                placeholder="Hae tuotetta"
                className="w-full rounded-full border border-line px-4 py-2 text-sm"
              />
            </form>
            <div className="flex flex-col gap-1 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/kategoria/${category.path}`}
                  className="rounded-lg px-2 py-2 hover:bg-sand"
                >
                  {category.title}
                </Link>
              ))}
              <Link href="/oppaat" className="rounded-lg px-2 py-2 hover:bg-sand">
                Oppaat
              </Link>
              <Link href="/yritys" className="rounded-lg px-2 py-2 hover:bg-sand">
                Yritys
              </Link>
              <Link href="/toimitus" className="rounded-lg px-2 py-2 hover:bg-sand">
                Toimitus
              </Link>
              <Link href="/takuu" className="rounded-lg px-2 py-2 hover:bg-sand">
                Takuu
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
