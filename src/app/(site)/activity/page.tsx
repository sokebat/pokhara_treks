import type { Metadata } from "next";

import ActivityView from "@/features/site/activity/components/ActivityView";
import { listingPageMetadata } from "@/features/page-seo/lib/listing-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/activity");
}

export default function ActivityPage() {
  return <ActivityView />;
}
