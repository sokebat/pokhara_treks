import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";
import FounderNoteSection from "@/features/site/home/components/FounderNoteSection";
import GuidesSection from "@/features/site/home/components/GuidesSection";
import WhyUsSection from "@/features/site/home/components/WhyUsSection";
import AboutHeroSection from "@/features/site/about/components/AboutHero";
 

const AboutUs = () => {
  return (
    <div>
      <AboutHeroSection />
      <WhyUsSection />
      <GuidesSection isactionactive={false} />
      <FounderNoteSection />
      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
};

export default AboutUs;
