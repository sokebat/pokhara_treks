import type { Metadata } from "next";

import HeliToursView from "@/features/site/heli-tours/components/HeliToursView";

export const metadata: Metadata = {
  title: "Helicopter Tours from Pokhara",
  description:
    "Annapurna, Mardi, Tilicho, Mustang, Everest and Muktinath helicopter landing tours from Pokhara — morning flights, back in Lakeside for lunch.",
};

export default function HeliToursPage() {
  return <HeliToursView />;
}
