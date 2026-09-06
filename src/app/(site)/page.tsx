import type { Metadata } from "next";

import HeroSection from "@/features/site/home/components/HeroSection";
import WaysToTravelSection from "@/features/site/home/components/WaysToTravelSection";
import PopularTreksSection from "@/features/site/home/components/PopularTreksSection";
import TravelSoloSection from "@/features/site/home/components/TravelSoloSection";
import WhyUsSection from "@/features/site/home/components/WhyUsSection";
import ShortTreksSection from "@/features/site/home/components/ShortTreksSection";
import HeliToursSection from "@/features/site/heli-tours/components/HeliToursSection";
import GuidesSection from "@/features/site/home/components/GuidesSection";
import FounderNoteSection from "@/features/site/home/components/FounderNoteSection";
import TestimonialsSection from "@/features/site/home/components/TestimonialsSection";
import BlogSection from "@/features/site/home/components/BlogSection";
import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/");

export default function Home() {
  return (
    <>
      <HeroSection />

      <WaysToTravelSection />

      <PopularTreksSection />

      <TravelSoloSection />

      <ShortTreksSection />
      <WhyUsSection />

      <HeliToursSection />

      <FounderNoteSection />
      <GuidesSection isactionactive={true} />

      <TestimonialsSection />

      <BlogSection />

      <FaqSection />

      <FindUsSection />

      <CTASection />
    </>
  );
}
