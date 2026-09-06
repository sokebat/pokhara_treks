import type { Metadata } from "next";

import { ListingSeoEditor } from "@/features/page-seo";

export const metadata: Metadata = {
  title: "tours-meta",
};

export default async function ToursMetaPage() {
  return <ListingSeoEditor pageKey="tours" />;
}
