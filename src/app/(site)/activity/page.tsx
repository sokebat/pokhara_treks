import type { Metadata } from "next";

import ActivityView from "@/features/site/activity/components/ActivityView";
import {
  ListingWebPageJsonLd,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/activity");
}

export default function ActivityPage() {
  return (
    <>
      <ListingWebPageJsonLd path="/activity" />
      <ActivityView />
    </>
  );
}
