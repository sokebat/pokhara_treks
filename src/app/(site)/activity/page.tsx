import type { Metadata } from "next";

import ActivityView from "@/features/site/activity/components/ActivityView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/activity");

export default function ActivityPage() {
  return <ActivityView />;
}
