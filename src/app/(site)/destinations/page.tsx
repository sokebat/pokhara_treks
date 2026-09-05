import type { Metadata } from "next";

import DestinationsView from "@/features/site/destinations/components/DestinationsView";

export const metadata: Metadata = {
  title: "Destinations — Nepal, Tibet and Bhutan",
  description:
    "Treks and tours in Nepal from Pokhara, plus Tibet Kailash and Bhutan itineraries with the same local team.",
};

export default function DestinationsPage() {
  return <DestinationsView />;
}
