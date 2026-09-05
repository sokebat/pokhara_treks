import Container from "@/components/shared/Container";
import { CTASection, FindUsSection } from "@/features/site/sections";
import { siteInfo } from "@/constant/site";

import TripBookingCard from "./TripBookingCard";
import TripBookingSafetyKit from "./TripBookingSafetyKit";
import TripBreadcrumb from "./TripBreadcrumb";
import TripDepartures from "./TripDepartures";
import TripDifficultyAndWhen from "./TripDifficultyAndWhen";
import TripFacts from "./TripFacts";
import TripGallery from "./TripGallery";
import TripIncluded from "./TripIncluded";
import TripItinerary from "./TripItinerary";
import TripMobileBar from "./TripMobileBar";
import TripOverview from "./TripOverview";
import TripQuestions from "./TripQuestions";
import TripRelatedAndAsk from "./TripRelatedAndAsk";
import TripReviews from "./TripReviews";
import TripTitleAndNav from "./TripTitleAndNav";
import TripTrailAndRoute from "./TripTrailAndRoute";

const TripDetailView = () => (
  <div className="pb-24 lg:pb-0">
    <TripBreadcrumb />
    <TripGallery />
    <TripTitleAndNav />
    <TripFacts />

    <Container>
      <div className="flex flex-col gap-8 pt-8 pb-4 lg:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start lg:gap-12">
        <div className="order-2 lg:order-1">
          <TripOverview />
        </div>
        <div className="order-1 lg:order-2">
          <TripBookingCard />
        </div>
        <div className="order-3 lg:col-span-2">
          <TripItinerary />
          <TripTrailAndRoute />
          <TripIncluded />
          <TripDifficultyAndWhen />
          <TripDepartures />
          <TripBookingSafetyKit />
          <TripReviews />
          <TripQuestions />
          <TripRelatedAndAsk />
        </div>
      </div>
    </Container>

    <CTASection
      eyebrow="Annapurna Base Camp · 7 days"
      title="Walk this one from Pokhara"
      description="A licensed woman at the front, a group of no more than eight, and USD 475. Twenty per cent holds the place. The rest is paid in Lakeside before you walk."
      primary={{ href: "#departures", label: "Check Dates and Prices" }}
      secondary={{
        href: `https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`,
        label: "WhatsApp Pushpa",
        external: true,
        whatsapp: true,
      }}
    />
    <FindUsSection />
    <TripMobileBar />
  </div>
);

export default TripDetailView;
