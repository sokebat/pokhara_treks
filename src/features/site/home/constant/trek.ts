import type { IconType } from "react-icons";

export type Trek = {
  title: string;
  days: string;
  href: string;
  rating: number;
  reviews: number;
  difficulty: string;
  altitude: string;
  season: string;
  price: number;
  icon: IconType;
  image: string;
};
