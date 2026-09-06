import type { Metadata } from "next";

import HeliToursView from "@/features/site/heli-tours/components/HeliToursView";
import { listingPageMetadata } from "@/features/page-seo/lib/listing-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/tours");
}

export default function HeliToursPage() {
  return <HeliToursView />;
}
