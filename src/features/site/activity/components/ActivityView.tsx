import { GridListingView } from "@/features/site/listing";
import { adventureActivities } from "@/features/site/activity/constant/activities";
import { toActivityListingItem } from "@/features/site/activity/lib/to-listing-item";

const ActivityView = () => (
  <GridListingView
    eyebrow="Pokhara Activities"
    title="Activities from Lakeside"
    description="Bungee, paragliding, ultralight, zipline, rafting, cycling and canyoning — booked from the same office that runs our treks."
    trips={adventureActivities.map(toActivityListingItem)}
    ctaLabel="View Activity"
  />
);

export default ActivityView;
