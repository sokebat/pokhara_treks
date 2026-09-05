import {
  TbBinoculars,
  TbBuildingBank,
  TbCamera,
  TbPaw,
  TbWalk,
} from "react-icons/tb";

import { navItems } from "@/constant/nav";
import type { SectionMeta } from "@/features/site/trips/constant/types";
import {
  buildSectionsFromNav,
  getMegaGroups,
} from "@/features/site/trips/lib/from-nav";

const toursMeta: Record<string, SectionMeta> = {
  "Day Hike in Nepal": {
    shortLabel: "Day hikes",
    icon: TbWalk,
    description:
      "Short walks from Pokhara and the valley — Australian Camp, Peace Pagoda, ridgelines, back the same day.",
  },
  "Day Tour": {
    shortLabel: "Day tours",
    icon: TbCamera,
    description:
      "Sunrise at Sarangkot or Nagarkot, lakeside, city and temple days without a tent.",
  },
  "Multi Days Tour": {
    shortLabel: "Multi-day",
    icon: TbBuildingBank,
    description:
      "Kathmandu, Pokhara, Chitwan and Lumbini combined — culture and wildlife in one itinerary.",
  },
  "Birding Tour Nepal": {
    shortLabel: "Birding",
    icon: TbBinoculars,
    description:
      "Guided birding around Pokhara's lakes, forest and farmland, with a local naturalist.",
  },
  "Nature & Wildlife": {
    shortLabel: "Wildlife",
    icon: TbPaw,
    description:
      "Jeep safari in Chitwan and Bardia — rhino, elephant, gharial, and a chance of tiger.",
  },
};

export const tourSections = buildSectionsFromNav(
  getMegaGroups(navItems, "/tours"),
  toursMeta,
  {
    defaultIcon: TbCamera,
    excerpt: ({ title }) =>
      `${title}. Booked from our Lakeside office in Pokhara.`,
  },
);

export const tourCount = tourSections.reduce(
  (total, section) => total + section.items.length,
  0,
);
