import type { Metadata } from "next";

import HeliToursView from "@/features/site/heli-tours/components/HeliToursView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/heli-tours");

export default function HeliToursPage() {
  return <HeliToursView />;
}
