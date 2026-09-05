import { navItems } from "@/constant/nav";
import {
  buildSectionsFromNav,
  getMegaGroups,
} from "@/features/site/listing";
import { regionMetaByLabel } from "@/features/site/region/constant/regions";

export const trekkingSections = buildSectionsFromNav(
  getMegaGroups(navItems, "/trip"),
  regionMetaByLabel,
);

export const trekkingCount = trekkingSections.reduce(
  (total, section) => total + section.items.length,
  0,
);
