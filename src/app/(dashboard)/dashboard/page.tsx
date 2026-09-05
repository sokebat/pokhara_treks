import type { Metadata } from "next";

import DashboardOverview from "@/features/dashboard/components/DashboardOverview";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function OverviewPage() {
  return <DashboardOverview />;
}
