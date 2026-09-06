import type { Metadata } from "next";

import TripDetailView from "@/features/site/trip";
import { pageMetadata } from "@/lib/seo";

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = pageMetadata({
  title: "Helicopter Tour from Pokhara",
  description:
    "Morning helicopter landing tours from Lakeside, Pokhara — Annapurna, Mardi, Everest and Muktinath.",
  path: "/tours",
});

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  await params;

  return <TripDetailView />;
}
