import type { Metadata } from "next";

import ActivityView from "@/features/site/adventures/components/ActivityView";

export const metadata: Metadata = {
  title: "Activities in Pokhara",
  description:
    "Bungee, paragliding, ultralight, zipline, rafting, cycling and canyoning from Pokhara — booked with the same local team that runs our treks.",
};

export default function ActivityPage() {
  return <ActivityView />;
}
