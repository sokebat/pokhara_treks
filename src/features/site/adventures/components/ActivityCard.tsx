import TripCard from "@/components/shared/TripCard";
import type { AdventureActivity } from "@/features/site/adventures/constant/adventures";
import { getActivityTripFacts } from "@/features/site/adventures/lib/activities";

const tones = ["accent", "primary", "chart-3"] as const;

type ActivityCardProps = {
  activity: AdventureActivity;
  index: number;
};

const ActivityCard = ({ activity, index }: ActivityCardProps) => (
  <TripCard
    href={activity.href}
    title={activity.title}
    icon={activity.icon}
    tone={tones[index % tones.length]}
    image={activity.image}
    price={activity.price}
    ctaLabel="View Activity"
    facts={getActivityTripFacts(activity)}
  />
);

export default ActivityCard;
