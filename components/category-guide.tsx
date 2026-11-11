import Link from "next/link";
import { FactTable } from "@/components/fact-table";
import type { CategoryGuide } from "@/lib/guides";

export function CategoryGuideBlock({ guide }: { guide: CategoryGuide }) {
  return (
    <section className="border-b border-[#eee] bg-[#fafafa]">
      <div className="mx-auto max-w-[1100px] px-4 py-10">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#777] uppercase">Opas</p>
        <h2 className="mt-2 text-2xl font-semibold">{guide.title}</h2>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-7 text-[#555]">
          {guide.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        {guide.table ? <FactTable table={guide.table} /> : null}
        {guide.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {guide.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#e36159] hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
