import type { Metadata } from "next";

import CustomizeTripView from "@/features/customize-trip/components/CustomizeTripView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/customize-my-trip");

export default function CustomizeMyTripPage() {
  return <CustomizeTripView />;
}
