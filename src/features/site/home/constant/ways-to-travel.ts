import {
  HELI_PHOTO,
  PARA_PHOTO,
  TREK_PHOTO,
  WOMEN_TREK_PHOTO,
} from "@/constant/photos";

export type TravelWay = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const travelWays: TravelWay[] = [
  {
    title: "Trekking",
    href: "/trip",
    image: TREK_PHOTO,
    imageAlt: "A trekking group on a Himalayan mountain trail",
  },
  {
    title: "Short Treks and Day Hikes from Pokhara",
    href: "/trip",
    image: WOMEN_TREK_PHOTO,
    imageAlt: "A woman trekker looking out over snow-capped peaks",
  },
  {
    title: "Helicopter Tours",
    href: "/tours",
    image: HELI_PHOTO,
    imageAlt: "A helicopter flying over a Himalayan mountain range",
  },
  {
    title: "Adventure Activities",
    href: "/activity",
    image: PARA_PHOTO,
    imageAlt: "Paragliders above the hills around Pokhara",
  },
];
