import { TbClock, TbCompass, TbHelicopter, TbMountain } from "react-icons/tb";

import type { HeliTour } from "@/features/site/heli-tours/constant/heli-tours";
import type { TripListingItem } from "@/features/site/listing/types";

export function toHeliListingItem(tour: HeliTour): TripListingItem {
  return {
    title: tour.title,
    excerpt: tour.excerpt,
    href: tour.href,
    duration: tour.flight,
    location: tour.location,
    price: tour.price,
    image: tour.image,
    tag: tour.location,
    icon: TbHelicopter,
    facts: [
      { icon: TbClock, label: "Flight", value: tour.flight },
      { icon: TbMountain, label: "Lands at", value: tour.landsAt },
      { icon: TbCompass, label: "Departs", value: tour.departs },
    ],
  };
}
