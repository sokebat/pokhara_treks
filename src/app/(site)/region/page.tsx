import type { Metadata } from "next";

import RegionsView from "@/features/site/region/components/RegionsView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/region");

export default function RegionsPage() {
  return <RegionsView />;
}
