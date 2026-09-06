import type { Metadata } from "next";

import TrekkingView from "@/features/site/trekking/components/TrekkingView";
import {
  ListingWebPageJsonLd,
  PAGE_SEO_REVALIDATE_SECONDS,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = PAGE_SEO_REVALIDATE_SECONDS;

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/trip");
}

export default function TripPage() {
  return (
    <>
      <ListingWebPageJsonLd path="/trip" />
      <TrekkingView />
    </>
  );
}
