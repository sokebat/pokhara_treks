import type { IconType } from "react-icons";
import {
  TbCalendarEvent,
  TbClock,
  TbFileText,
  TbMountain,
} from "react-icons/tb";

export type PublicRegionFact = {
  label: string;
  value: string;
  icon: IconType;
};

export type PublicRegionLink = {
  slug: string;
  shortLabel: string;
  title: string;
};

/** Hero + facts content for /region/[slug], loaded from the database. */
export type PublicRegion = {
  slug: string;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  location: string;
  image: string;
  imageAlt: string;
  bodyHtml: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  highestPoint: string;
  bestSeason: string;
  typicalDuration: string;
  facts: PublicRegionFact[];
};

export const regionFactIcons = {
  "Highest point": TbMountain,
  "Best season": TbCalendarEvent,
  Permits: TbFileText,
  "Typical trek": TbClock,
  "Typical trip": TbClock,
} as const;
