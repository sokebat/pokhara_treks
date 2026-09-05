import { TbClock, TbMapPin, TbMountain } from "react-icons/tb";

import type { AdventureActivity } from "@/features/site/adventures/constant/types";

export function getActivityTripFacts(activity: AdventureActivity) {
  return [
    { icon: TbClock, label: "Duration", value: activity.duration },
    { icon: TbMapPin, label: "Location", value: activity.location },
    { icon: TbMountain, label: "Difficulty", value: activity.difficulty },
  ];
}
