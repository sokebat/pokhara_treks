import type { Metadata } from "next";

import { ListingSeoEditor } from "@/features/page-seo";

 

export default async function RegionMetaPage() {
  return <ListingSeoEditor pageKey="regions" />;
}
