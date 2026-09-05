import Container from "@/components/shared/Container";
import { CTASection, FindUsSection } from "@/features/site/sections";
import { siteInfo } from "@/constant/site";

import TripAsk from "./TripAsk";
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
import TripQuestions from "./TripQuestions";
import TripRelated from "./TripRelated";
import TripReviews from "./TripReviews";
import TripRoute from "./TripRoute";
import TripSafety from "./TripSafety";
import TripTitleAndNav from "./TripTitleAndNav";
import TripTrail from "./TripTrail";
import TripWhen from "./TripWhen";

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
          <TripTrail />
          <TripRoute />
          <TripIncluded />
          <TripDifficulty />
          <TripWhen />
          <TripDepartures />
          <TripBooking />
          <TripSafety />
          <TripKit />
          <TripReviews />
          <TripQuestions />
          <TripRelated />
          <TripAsk />
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
