import type { Metadata } from "next";

import RegionsView from "@/features/site/region/components/RegionsView";
import { listingPageMetadata } from "@/features/page-seo/lib/listing-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/region");
}

export default function RegionsPage() {
  return <RegionsView />;
}
