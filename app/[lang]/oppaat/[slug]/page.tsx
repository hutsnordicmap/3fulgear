import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FactTable } from "@/components/fact-table";
import { articleBySlug, articles } from "@/lib/guides";
import { href, langOf, ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  const { slug } = await params;
  const article = articleBySlug(slug, lang);
  if (!article) return { title: ui[lang].guide };
  return pageMeta(lang, `/oppaat/${article.slug}`, article.title, article.description, article.image);
}

export default async function ArticlePage({ params }: Props) {
  const lang = await langOf(params);
  const { slug } = await params;
  const article = articleBySlug(slug, lang);
  if (!article) notFound();

  return (
    <article className="bg-white">
      <header className="border-b border-[#eee]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#777] uppercase">{ui[lang].guide}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">{article.title}</h1>
            <p className="mt-4 text-sm leading-7 text-[#555]">{article.lead}</p>
          </div>
          <img src={article.image} alt={article.imageAlt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </header>
      <div className="mx-auto max-w-[760px] px-4 py-12">
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10 first:mt-0">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[#444]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        {article.table ? <FactTable table={article.table} lang={lang} /> : null}
        <div className="mt-10 flex flex-wrap gap-3">
          {article.products.map((product) => (
            <Link key={product.href} href={href(lang, product.href)} className="store-btn">
              {product.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
