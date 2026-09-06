import type { Metadata } from "next";

import HeliToursView from "@/features/site/heli-tours/components/HeliToursView";
import {
  ListingWebPageJsonLd,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/tours");
}

export default function HeliToursPage() {
  return (
    <>
      <ListingWebPageJsonLd path="/tours" />
      <HeliToursView />
    </>
  );
}
