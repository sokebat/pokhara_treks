import type { Metadata } from "next";

import DestinationsView from "@/features/site/destinations/components/DestinationsView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/destinations");

export default function DestinationsPage() {
  return <DestinationsView />;
}
