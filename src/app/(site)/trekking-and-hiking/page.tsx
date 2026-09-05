import type { Metadata } from "next";

import TrekkingView from "@/features/site/trekking/components/TrekkingView";

export const metadata: Metadata = {
  title: "Trekking in Nepal",
  description:
    "Annapurna, Everest, Manaslu, Langtang and west Nepal treks from Pokhara — lodge treks run by a Lakeside team.",
};

export default function TrekkingPage() {
  return <TrekkingView />;
}
