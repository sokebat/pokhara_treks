import CTASection from "@/components/shared/CTASection";
import FaqSection from "@/components/shared/FaqSection";
import FindUsSection from "@/components/shared/FindUsSection";
import FounderNoteSection from "@/components/shared/FounderNoteSection";
import GuidesSection from "@/components/shared/GuidesSection";
import WhyUsSection from "@/components/shared/WhyUsSection";
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
