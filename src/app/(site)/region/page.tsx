import type { Metadata } from "next";

import RegionsView from "@/features/site/region/components/RegionsView";
import {
  ListingWebPageJsonLd,
  listingPageMetadata,
} from "@/features/page-seo";

export const revalidate = 3600;

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
