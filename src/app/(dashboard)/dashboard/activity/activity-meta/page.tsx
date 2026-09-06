import type { Metadata } from "next";

import { ListingSeoEditor } from "@/features/page-seo";

export const metadata: Metadata = {
  title: "activity-meta",
};

export default async function ActivityMetaPage() {
  return <ListingSeoEditor pageKey="activity" />;
}
