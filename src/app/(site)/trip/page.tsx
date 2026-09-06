import type { Metadata } from "next";

import TrekkingView from "@/features/site/trekking/components/TrekkingView";
import { listingPageMetadata } from "@/features/page-seo/lib/listing-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return listingPageMetadata("/trip");
}

export default function TripPage() {
  return <TrekkingView />;
}
