import type { Metadata } from "next";

import HeroSection from "@/features/home/components/HeroSection";
import WhyUsSection from "@/features/home/components/WhyUsSection";
import ShortTreksSection from "@/features/home/components/ShortTreksSection";
import HeliToursSection from "@/features/home/components/HeliToursSection";
import GuidesSection from "@/features/home/components/GuidesSection";
import FounderNoteSection from "@/features/home/components/FounderNoteSection";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import BlogSection from "@/features/home/components/BlogSection";
import HomeFaqSection from "@/features/home/components/HomeFaqSection";
import FindUsSection from "@/features/home/components/FindUsSection";
import CTASection from "@/features/home/components/CTASection";

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

      <GuidesSection />

      <FounderNoteSection />

      <TestimonialsSection />

      <BlogSection />

      <HomeFaqSection />

      <FindUsSection />

      <CTASection />
    </>
  );
}
