import type { IconType } from "react-icons";

export type TripListingItem = {
  title: string;
  excerpt: string;
  href: string;
  duration: string;
  location: string;
  difficulty?: string;
  price?: number;
  image: string;
  tag: string;
  icon: IconType;
};

export type SectionMeta = {
  description: string;
  shortLabel: string;
  icon: IconType;
};

export type TripListingSection = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: IconType;
  items: TripListingItem[];
};
