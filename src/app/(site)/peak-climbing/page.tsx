import type { Metadata } from "next";

import PeakClimbingView from "@/features/site/peak-climbing/components/PeakClimbingView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/peak-climbing");

export default function PeakClimbingPage() {
  return <PeakClimbingView />;
}
