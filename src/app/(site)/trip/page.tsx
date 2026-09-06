import type { Metadata } from "next";

import TrekkingView from "@/features/site/trekking/components/TrekkingView";
import {
  ListingWebPageJsonLd,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = 3600;

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
