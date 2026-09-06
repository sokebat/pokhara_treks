import { navItems } from "@/constant/nav";
import { buildSectionsFromNav } from "@/features/site/listing";
import { regionMetaByLabel } from "@/features/site/region/constant/regions";

const trekkingNav = navItems.find(
  (item) => item.type === "mega" && item.label === "Trekking",
);

export const trekkingSections = buildSectionsFromNav(
  trekkingNav?.type === "mega" ? trekkingNav.groups : [],
  regionMetaByLabel,
);

export const trekkingCount = trekkingSections.reduce(
  (total, section) => total + section.items.length,
  0,
);

export function getRegionTrips(regionLabel: string) {
  const group =
    trekkingNav?.type === "mega"
      ? trekkingNav.groups.find((item) => item.label === regionLabel)
      : undefined;

  if (!group) {
    return [];
  }

  return (
    buildSectionsFromNav([group], regionMetaByLabel)[0]?.items ?? []
  );
}
