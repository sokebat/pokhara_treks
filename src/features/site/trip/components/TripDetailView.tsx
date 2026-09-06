import Container from "@/components/shared/Container";
import TestimonialsSection from "@/features/site/home/components/TestimonialsSection";
import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";

import TripBooking from "./TripBooking";
import TripBookingCard from "./TripBookingCard";
import TripBreadcrumb from "./TripBreadcrumb";
import TripDepartures from "./TripDepartures";
import TripDifficulty from "./TripDifficulty";
import TripFacts from "./TripFacts";
import TripGallery from "./TripGallery";
import TripIncluded from "./TripIncluded";
import TripItinerary from "./TripItinerary";
import TripKit from "./TripKit";
import TripMobileBar from "./TripMobileBar";
import TripOverview from "./TripOverview";
import TripRelated from "./TripRelated";
import TripRoute from "./TripRoute";
import TripSafety from "./TripSafety";
import TripTitleAndNav from "./TripTitleAndNav";
import TripTrail from "./TripTrail";
import TripWhen from "./TripWhen";

const TripDetailView = () => (
  <div className="pb-32 lg:pb-0">
    <TripBreadcrumb />
    <TripGallery />
    <TripTitleAndNav />
    <TripFacts />

    <Container>
      <div className="flex flex-col gap-6 pt-6 pb-2 lg:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-6">
        <div className="order-2 min-w-0 lg:order-1">
          <TripOverview />
          <TripItinerary />
          <TripTrail />
          <TripRoute />
          <TripIncluded />
          <TripDifficulty />
          <TripWhen />
          <TripDepartures />
          <TripBooking />
          <TripSafety />
          <TripKit />
          <TripRelated />
          <TestimonialsSection
            id="reviews"
            withContainer={false}
            className="px-0 pt-8 pb-4 sm:pt-8 sm:pb-6"
          />
          <FaqSection
            id="questions"
            withContainer={false}
            className="py-6 sm:py-8"
          />
        </div>
        <div className="order-1 lg:order-2">
          <TripBookingCard />
        </div>
      </div>
    </Container>

    <FindUsSection />
    <CTASection />
    <TripMobileBar />
  </div>
);

export default TripDetailView;
