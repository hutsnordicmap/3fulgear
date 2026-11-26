"use client";

import Link from "next/link";
import { usePagePath } from "@/lib/use-page-path";

const text = {
  fi: { title: "Sivua ei löydy", body: "Tuote on voitu poistaa valmistajan valikoimasta.", link: "Koko valikoimaan", href: "/tuotteet" },
  sv: { title: "Sidan hittades inte", body: "Produkten kan ha tagits bort ur tillverkarens sortiment.", link: "Till hela sortimentet", href: "/sv/tuotteet" },
};

// not-found gets no params, so the language comes from the address.
export default function NotFound() {
  const pathname = usePagePath();
  const t = pathname === "/sv" || pathname.startsWith("/sv/") ? text.sv : text.fi;
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold">{t.title}</h1>
      <p className="mt-4 text-ink/70">{t.body}</p>
      <Link href={t.href} className="mt-6 inline-block font-semibold underline">
        {t.link}
      </Link>
    </div>
  );
}
