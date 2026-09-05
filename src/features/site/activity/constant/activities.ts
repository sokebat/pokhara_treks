import { airActivities } from "@/features/site/activity/constant/activities-air";
import { trailActivities } from "@/features/site/activity/constant/activities-trail";
import type { AdventureActivity } from "@/features/site/activity/constant/types";

export type { AdventureActivity } from "@/features/site/activity/constant/types";
export { adventureCategories } from "@/features/site/activity/constant/categories";

export const adventureActivities: AdventureActivity[] = [
  ...airActivities,
  ...trailActivities,
];
