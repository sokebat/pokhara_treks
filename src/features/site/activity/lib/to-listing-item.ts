import type { AdventureActivity } from "@/features/site/activity/constant/types";
import type { TripListingItem } from "@/features/site/listing/types";

export function toActivityListingItem(
  activity: AdventureActivity,
): TripListingItem {
  return {
    title: activity.title,
    excerpt: activity.excerpt,
    href: activity.href,
    duration: activity.duration,
    location: activity.location,
    difficulty: activity.difficulty,
    price: activity.price,
    image: activity.image,
    tag: activity.location,
    icon: activity.icon,
  };
}
