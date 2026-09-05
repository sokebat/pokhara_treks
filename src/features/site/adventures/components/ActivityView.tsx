import { ListingPage } from "@/components/shared/listing";
import ActivityCard from "@/features/site/adventures/components/ActivityCard";
import { adventureActivities } from "@/features/site/adventures/constant/adventures";

const ActivityView = () => (
  <ListingPage
    eyebrow="Pokhara Activities"
    title="Activities from Lakeside"
    description="Bungee, paragliding, ultralight, zipline, rafting, cycling and canyoning — booked from the same office that runs our treks."
  >
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 xl:grid-cols-4">
      {adventureActivities.map((activity, index) => (
        <ActivityCard key={activity.href} activity={activity} index={index} />
      ))}
    </div>
  </ListingPage>
);

export default ActivityView;
