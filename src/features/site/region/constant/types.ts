import type { IconType } from "react-icons";

export type RegionFact = {
  label: string;
  value: string;
  icon: IconType;
};

export type TrekkingRegion = {
  slug: string;
  label: string;
  shortLabel: string;
  title: string;
  tagline: string;
  description: string;
  icon: IconType;
  image: string;
  imageAlt: string;
  location: string;
  typicalDuration: string;
  facts: RegionFact[];
  paragraphs: string[];
};
