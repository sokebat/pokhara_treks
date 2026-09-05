import { TbClock, TbCompass, TbMountain } from "react-icons/tb";

import type { HeliTour } from "@/features/site/heli-tours/constant/heli-tours";

export function getHeliTourTripFacts(tour: HeliTour) {
  return [
    { icon: TbClock, label: "Flight", value: tour.flight },
    { icon: TbMountain, label: "Lands at", value: tour.landsAt },
    { icon: TbCompass, label: "Departs", value: tour.departs },
  ];
}
