import { TbBuildingBank, TbFlag, TbMountain } from "react-icons/tb";

import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";
import type { TripListingItem } from "@/features/site/trips/constant/types";

export const destinationTrips: TripListingItem[] = [
  {
    title: "Nepal",
    excerpt:
      "Treks, tours and activities across the Himalaya, with Pokhara as our base. Annapurna, Everest, Mustang, wildlife and days on the lake.",
    href: "/nepal-tour-package",
    duration: "Flexible",
    location: "Pokhara · Kathmandu · Chitwan",
    image: TREK_PHOTO,
    tag: "Himalaya",
    icon: TbMountain,
  },
  {
    title: "Tibet",
    excerpt:
      "Kailash yatra and plateau tours arranged from Nepal. Permits, overland or fly-in, with a team that already knows the border.",
    href: "/tibet-tour-package-from-nepal",
    duration: "11–16 Days",
    location: "Kailash · Lhasa · EBC North",
    image: WOMEN_TREK_PHOTO,
    tag: "Plateau",
    icon: TbFlag,
  },
  {
    title: "Bhutan",
    excerpt:
      "Short cultural tours and treks in the kingdom — temples, dzongs and high valleys, planned from our Lakeside office.",
    href: "/bhutan-tour-package",
    duration: "5–8 Days",
    location: "Paro · Thimphu · Punakha",
    image: TREK_PHOTO,
    tag: "Kingdom",
    icon: TbBuildingBank,
  },
];
