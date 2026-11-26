import { notFound } from "next/navigation";

// Any address that matches no page shows the language's own "page not found".
export default function Missing() {
  notFound();
}
