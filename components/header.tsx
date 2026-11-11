import { getCatalog } from "@/lib/catalog";
import { buildNav } from "@/lib/navigation";
import { SiteNav } from "@/components/site-nav";

export async function Header() {
  const items = buildNav(await getCatalog());
  return <SiteNav items={items} />;
}
