import type { IconType } from "react-icons";
import { TbMountain } from "react-icons/tb";

import type { NavGroup, NavItem } from "@/constant/nav";
import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";
import {
  popularTreks,
  shortTreks,
  type Trek,
} from "@/features/site/home/constant/treks";
import type {
  SectionMeta,
  TripListingItem,
  TripListingSection,
} from "@/features/site/listing/types";
import { slugify } from "@/lib/slug";

const trekByHref = new Map<string, Trek>(
  [...popularTreks, ...shortTreks].map((trek) => [trek.href, trek]),
);

function titleFromNavLabel(label: string) {
  return label
    .replace(/\s*[–—-]\s*\d+\s*Days?.*$/i, "")
    .replace(/\s*\(\d+\s*Days?\)\s*$/i, "")
    .replace(/:\s*\d+\s*Days?\s*$/i, "")
    .trim();
}

function durationFromLabel(label: string, fallback = "Flexible") {
  const match = label.match(/(\d+)\s*(?:Days?|Nights?)/i);
  if (match) return `${match[1]} Days`;
  if (/half day/i.test(label)) return "Half day";
  if (/day hike|day tour/i.test(label)) return "1 Day";
  return fallback;
}

export function getMegaGroups(navItems: NavItem[], href: string): NavGroup[] {
  const item = navItems.find((nav) => nav.href === href);
  return item?.type === "mega" ? item.groups : [];
}

export function buildSectionsFromNav(
  groups: NavGroup[],
  metaByLabel: Record<string, SectionMeta>,
  options?: {
    defaultIcon?: IconType;
    excerpt?: (details: {
      title: string;
      location: string;
      duration: string;
      trek?: Trek;
    }) => string;
  },
): TripListingSection[] {
  const assigned = new Map<string, string>();

  for (const group of groups) {
    for (const leaf of group.children) {
      assigned.set(leaf.href, group.label);
    }
  }

  const defaultIcon = options?.defaultIcon ?? TbMountain;

  return groups
    .map((group, groupIndex) => {
      const meta = metaByLabel[group.label];
      const location = group.label.replace(/ Region$/, "");
      const items = group.children
        .filter((leaf) => assigned.get(leaf.href) === group.label)
        .map((leaf, index) => {
          const trek = trekByHref.get(leaf.href);
          const title = trek?.title ?? titleFromNavLabel(leaf.label);
          const duration = trek?.days ?? durationFromLabel(leaf.label);
          const excerpt =
            options?.excerpt?.({ title, location, duration, trek }) ??
            `${title} in the ${location} region. Guided from our Lakeside office in Pokhara.`;

          return {
            title,
            excerpt,
            href: leaf.href,
            duration,
            location,
            difficulty: trek?.difficulty,
            price: trek?.price,
            image:
              trek?.image ??
              ((groupIndex + index) % 2 === 0 ? TREK_PHOTO : WOMEN_TREK_PHOTO),
            tag: meta?.shortLabel ?? location,
            icon: trek?.icon ?? meta?.icon ?? defaultIcon,
          } satisfies TripListingItem;
        });

      return {
        slug: slugify(group.label),
        label: group.label,
        shortLabel: meta?.shortLabel ?? location,
        description: meta?.description ?? `Trips in the ${location}.`,
        icon: meta?.icon ?? defaultIcon,
        items,
      } satisfies TripListingSection;
    })
    .filter((section) => section.items.length > 0);
}
