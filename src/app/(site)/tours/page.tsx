import type { Metadata } from "next";

import ToursView from "@/features/site/tours/components/ToursView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/tours");

export default function ToursPage() {
  return <ToursView />;
}
