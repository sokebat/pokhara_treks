import type { Metadata } from "next";

import HeliToursView from "@/features/site/heli-tours/components/HeliToursView";
import {
  ListingWebPageJsonLd,
  PAGE_SEO_REVALIDATE_SECONDS,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = PAGE_SEO_REVALIDATE_SECONDS;

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
