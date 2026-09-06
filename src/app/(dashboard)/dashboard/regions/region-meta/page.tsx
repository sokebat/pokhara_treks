import type { Metadata } from "next";

import { ListingSeoEditor } from "@/features/page-seo";

export const metadata: Metadata = {
  title: "region-meta",
};

export default async function RegionMetaPage() {
  return <ListingSeoEditor pageKey="regions" />;
}
