import type { Metadata } from "next";

import PeakClimbingView from "@/features/site/trips/components/PeakClimbingView";

export const metadata: Metadata = {
  title: "Peak Climbing in Nepal",
  description:
    "Mera, Island, Lobuche, Mardi Himal, Yala and Chulu Far East — guided trekking peaks from Pokhara Treks.",
};

export default function PeakClimbingPage() {
  return <PeakClimbingView />;
}
