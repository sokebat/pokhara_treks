import type { Metadata } from "next";

import TrekkingView from "@/features/site/trekking/components/TrekkingView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/trip");

export default function TripPage() {
  return <TrekkingView />;
}
