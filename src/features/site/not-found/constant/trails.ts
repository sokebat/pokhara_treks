import {
  TbCompass,
  TbHome,
  TbMail,
  TbMountain,
  TbNews,
  TbUsers,
} from "react-icons/tb";
import type { IconType } from "react-icons";

export type NotFoundTrail = {
  href: string;
  label: string;
  description: string;
  icon: IconType;
};

export const notFoundTrails: NotFoundTrail[] = [
  {
    href: "/",
    label: "Home",
    description: "Start again from Lakeside.",
    icon: TbHome,
  },
  {
    href: "/trip",
    label: "Treks",
    description: "Routes across Nepal.",
    icon: TbMountain,
  },
  {
    href: "/about-us",
    label: "About us",
    description: "Our story and guides.",
    icon: TbUsers,
  },
  {
    href: "/blogs",
    label: "Blogs",
    description: "Guides and trail notes.",
    icon: TbNews,
  },
  {
    href: "/customize-my-trip",
    label: "Plan a trip",
    description: "We'll build it around you.",
    icon: TbCompass,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Talk to the office.",
    icon: TbMail,
  },
];
