import type { Metadata } from "next";

import TripDetailView from "@/features/site/trip/components/TripDetailView";
import { pageMetadata } from "@/lib/seo";

type TripDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = pageMetadata({
  title: "Annapurna Base Camp Trek, 7 Days from Pokhara",
  description:
    "Seven days from Lakeside to Annapurna Base Camp at 4,130 m with a licensed female guide. USD 475, permits and porter included.",
  path: "/trip",
});

export default async function TripDetailPage({ params }: TripDetailPageProps) {
  await params;

  return <TripDetailView />;
}
