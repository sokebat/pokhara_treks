import type { Metadata } from "next";

import HeroSection from "@/features/site/home/components/HeroSection";
import WhyUsSection from "@/components/shared/WhyUsSection";
import ShortTreksSection from "@/features/site/home/components/ShortTreksSection";
import HeliToursSection from "@/features/site/heli-tours/components/HeliToursSection";
import GuidesSection from "@/components/shared/GuidesSection";
import FounderNoteSection from "@/components/shared/FounderNoteSection";
import TestimonialsSection from "@/features/site/home/components/TestimonialsSection";
import BlogSection from "@/features/site/home/components/BlogSection";
import FaqSection from "@/components/shared/FaqSection";
import FindUsSection from "@/components/shared/FindUsSection";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  description:
    "Book treks, peak climbs and heli tours in Nepal with a women-led, locally owned team based in Lakeside, Pokhara — licensed guides, small groups, book direct.",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <WhyUsSection />

      <ShortTreksSection />

      <HeliToursSection />

      <GuidesSection isactionactive={true} />

      <FounderNoteSection />

      <TestimonialsSection />

      <BlogSection />

      <FaqSection />

      <FindUsSection />

      <CTASection />
    </>
  );
}
