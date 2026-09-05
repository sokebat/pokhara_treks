import type { IconType } from "react-icons";

export type AdventureCategory = {
  slug: string;
  label: string;
  shortLabel: string;
  href: string;
  description: string;
  icon: IconType;
};

export type AdventureActivity = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  duration: string;
  location: string;
  difficulty: string;
  price: number;
  image: string;
  icon: IconType;
};
