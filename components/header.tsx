import { getCatalog } from "@/lib/catalog";
import type { Lang } from "@/lib/i18n";
import { buildNav } from "@/lib/navigation";
import { SiteNav } from "@/components/site-nav";

export async function Header({ lang }: { lang: Lang }) {
  const items = buildNav(await getCatalog(lang), lang);
  return <SiteNav items={items} lang={lang} />;
}
