import type { Metadata } from "next";

import RegionsView from "@/features/site/region/components/RegionsView";
import {
  ListingWebPageJsonLd,
  PAGE_SEO_REVALIDATE_SECONDS,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = PAGE_SEO_REVALIDATE_SECONDS;

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/region");
}

export default function RegionsPage() {
  return (
    <>
      <ListingWebPageJsonLd path="/region" />
      <RegionsView />
    </>
  );
}
