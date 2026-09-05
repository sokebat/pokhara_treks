import { ListingPage } from "@/components/shared/listing";
import HeliTourCard from "@/features/site/heli-tours/components/HeliTourCard";
import { heliTours } from "@/features/site/heli-tours/constant/heli-tours";

const HeliToursView = () => (
  <ListingPage
    eyebrow="Helicopter Tours"
    title="Helicopter tours from Pokhara"
    description="Annapurna, Mardi, Everest and Muktinath from the air. Land at base camp, a glacier lake, or a temple — and be back in Lakeside for lunch."
  >
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 xl:grid-cols-4">
      {heliTours.map((tour, index) => (
        <HeliTourCard key={tour.href} tour={tour} index={index} />
      ))}
    </div>
  </ListingPage>
);

export default HeliToursView;
