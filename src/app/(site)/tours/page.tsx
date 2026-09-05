import type { Metadata } from "next";

import ToursView from "@/features/site/tours/components/ToursView";

export const metadata: Metadata = {
  title: "Tours in Nepal",
  description:
    "Day hikes, city and sunrise tours, multi-day Nepal circuits, birding and wildlife safari from Pokhara.",
};

export default function ToursPage() {
  return <ToursView />;
}
