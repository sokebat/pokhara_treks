import type { Metadata } from "next";

import { ListingSeoEditor } from "@/features/page-seo";

export const metadata: Metadata = {
  title: "trip-meta",
};

export default async function TripMetaPage() {
  return <ListingSeoEditor pageKey="trip" />;
}
