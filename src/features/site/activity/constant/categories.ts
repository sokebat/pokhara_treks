import {
  TbArrowBarToDown,
  TbBike,
  TbDroplet,
  TbParachute,
  TbPlane,
  TbRipple,
  TbRoute,
} from "react-icons/tb";

import type { AdventureCategory } from "@/features/site/activity/constant/types";

export const adventureCategories: AdventureCategory[] = [
  {
    slug: "bungee-spots",
    label: "Bungee Spots",
    shortLabel: "Bungee",
    href: "/activity",
    description:
      "Two of Nepal's highest jumps — one over the Kaligandaki gorge at Kushma, one just outside Pokhara.",
    icon: TbArrowBarToDown,
  },
  {
    slug: "ultralight-flying-in-pokhara",
    label: "Ultralight Flying in Pokhara",
    shortLabel: "Ultralight",
    href: "/activity",
    description:
      "Open-cockpit flights over Phewa Lake and the Annapurna range. Fifteen minutes to an hour and a half.",
    icon: TbPlane,
  },
  {
    slug: "paragliding-in-pokhara",
    label: "Paragliding in Pokhara",
    shortLabel: "Paragliding",
    href: "/activity",
    description:
      "Tandem flights from Sarangkot with a landing on the lakeshore. The classic Pokhara morning.",
    icon: TbParachute,
  },
  {
    slug: "zip-flyer-pokhara",
    label: "Zip Flyer - Pokhara",
    shortLabel: "Zip Flyer",
    href: "/activity",
    description:
      "One of the world's longest ziplines, running 1.8 km from Sarangkot down toward the valley floor.",
    icon: TbRoute,
  },
  {
    slug: "rafting",
    label: "Rafting",
    shortLabel: "Rafting",
    href: "/activity",
    description:
      "Day trips and multi-day runs on the Seti, Trishuli, Kali Gandaki and Marsyangdi — all reachable from Pokhara.",
    icon: TbRipple,
  },
  {
    slug: "cycling",
    label: "Cycling",
    shortLabel: "Cycling",
    href: "/activity",
    description:
      "Lakeside loops, village trails, and longer mountain-bike tours through Mustang and the Annapurna circuit.",
    icon: TbBike,
  },
  {
    slug: "canyoning",
    label: "Canyoning",
    shortLabel: "Canyoning",
    href: "/activity",
    description:
      "Rappels, jumps and slides through limestone gorges in Lwang and Jalbire, a short drive from Lakeside.",
    icon: TbDroplet,
  },
];
