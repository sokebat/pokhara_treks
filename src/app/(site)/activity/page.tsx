import type { Metadata } from "next";

import ActivityView from "@/features/site/activity/components/ActivityView";
import {
  ListingWebPageJsonLd,
  PAGE_SEO_REVALIDATE_SECONDS,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = PAGE_SEO_REVALIDATE_SECONDS;

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
