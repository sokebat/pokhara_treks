import { airActivities } from "@/features/site/adventures/constant/activities-air";
import { trailActivities } from "@/features/site/adventures/constant/activities-trail";
import type { AdventureActivity } from "@/features/site/adventures/constant/types";

export const adventureActivities: AdventureActivity[] = [
  ...airActivities,
  ...trailActivities,
];
