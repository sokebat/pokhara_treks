import { airActivities } from "@/features/site/adventures/constant/activities-air";
import { trailActivities } from "@/features/site/adventures/constant/activities-trail";
import { adventureCategories } from "@/features/site/adventures/constant/categories";
import type { AdventureActivity } from "@/features/site/adventures/constant/types";

export const adventureActivities: AdventureActivity[] = [
  ...airActivities,
  ...trailActivities,
];

export function getAdventureCategory(slug: string) {
  return adventureCategories.find((category) => category.slug === slug);
}

export function getAdventuresByCategory(slug?: string) {
  if (!slug) return adventureActivities;
  return adventureActivities.filter((activity) => activity.category === slug);
}

export function getCategoryCount(slug: string) {
  return adventureActivities.filter((activity) => activity.category === slug)
    .length;
}
