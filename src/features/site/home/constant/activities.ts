import {
  TbCamera,
  TbCompass,
  TbHelicopter,
  TbMountain,
  TbWalk,
} from "react-icons/tb";
import type { IconType } from "react-icons";

export type HomeActivity = {
  title: string;
  count: string;
  href: string;
  icon: IconType;
};

export const homeActivities: HomeActivity[] = [
  {
    title: "Trekking",
    count: "18 treks",
    href: "/trekking-and-hiking",
    icon: TbMountain,
  },
  {
    title: "Short Treks & Day Hikes",
    count: "4 hikes",
    href: "/day-hike-in-nepal",
    icon: TbWalk,
  },
  {
    title: "Peak Climbing",
    count: "8 peaks",
    href: "/peak-climbing",
    icon: TbMountain,
  },
  {
    title: "Helicopter Tours",
    count: "12 tours",
    href: "/heli-tours",
    icon: TbHelicopter,
  },
  {
    title: "Activities",
    count: "16 activities",
    href: "/activity",
    icon: TbCompass,
  },
  {
    title: "Tours",
    count: "5 tours",
    href: "/tours",
    icon: TbCamera,
  },
];
