import {
  TbFlag,
  TbMountain,
  TbRoute,
  TbSunrise,
  TbTent,
} from "react-icons/tb";

import { navItems } from "@/constant/nav";
import type { SectionMeta } from "@/features/site/listing";
import {
  buildSectionsFromNav,
  getMegaGroups,
} from "@/features/site/listing";

const trekkingMeta: Record<string, SectionMeta> = {
  "Everest Region": {
    shortLabel: "Everest",
    icon: TbMountain,
    description:
      "Base Camp, Gokyo and the Three Passes — the classic Khumbu treks under the world's highest mountain.",
  },
  "Annapurna Region": {
    shortLabel: "Annapurna",
    icon: TbSunrise,
    description:
      "The treks we run most from Pokhara: ABC, Mardi, Poon Hill, Mustang and the quieter ridges around the sanctuary.",
  },
  "Manaslu Region": {
    shortLabel: "Manaslu",
    icon: TbRoute,
    description:
      "Circuit and Tsum Valley on a quieter trail around the world's eighth-highest mountain.",
  },
  "West Nepal": {
    shortLabel: "West",
    icon: TbTent,
    description:
      "Rara, Dolpo and Dhorpatan — remote west Nepal, fewer lodges, fewer crowds.",
  },
  "Langtang Region": {
    shortLabel: "Langtang",
    icon: TbMountain,
    description:
      "Valley, Gosaikunda and Helambu — close to Kathmandu, with Tamang villages and high lakes.",
  },
  "Dhaulagiri Region": {
    shortLabel: "Dhaulagiri",
    icon: TbFlag,
    description:
      "The long circuit around the White Mountain, with high camps and glacier crossings.",
  },
  "Tibet Region": {
    shortLabel: "Tibet",
    icon: TbFlag,
    description:
      "Kailash yatra and Bhutan tours arranged from Nepal, for travellers combining the plateau with a Himalayan trek.",
  },
  "Kanchenjunga Region": {
    shortLabel: "Kanchenjunga",
    icon: TbMountain,
    description:
      "The long eastern circuit to the third-highest mountain, far from the Annapurna crowds.",
  },
};

export const trekkingSections = buildSectionsFromNav(
  getMegaGroups(navItems, "/trekking-and-hiking"),
  trekkingMeta,
);

export const trekkingCount = trekkingSections.reduce(
  (total, section) => total + section.items.length,
  0,
);
