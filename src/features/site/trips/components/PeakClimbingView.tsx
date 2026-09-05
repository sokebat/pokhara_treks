import GridListingView from "@/features/site/trips/components/GridListingView";
import { peakClimbs } from "@/features/site/trips/constant/peak-climbing";

const PeakClimbingView = () => (
  <GridListingView
    eyebrow="Peak Climbing"
    title="Trekking peaks in Nepal"
    description="Mera, Island, Lobuche, Mardi, Yala and Chulu — guided climbs with the same team that runs our treks from Pokhara."
    trips={peakClimbs}
    ctaLabel="View climb"
  />
);

export default PeakClimbingView;
