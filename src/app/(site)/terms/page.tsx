import { TbFileText } from "react-icons/tb";
import type { Metadata } from "next";

import Container from "@/components/shared/Container";
import LegalPageHeader from "@/features/site/legal/components/LegalPageHeader";
import { termsContent } from "@/features/site/legal/constant/legal";
import LegalToc from "@/features/site/legal/components/LegalToc";
import LegalContent from "@/features/site/legal/components/LegalContent";
 
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that apply to bookings and trips with Pokhara Treks & Expeditions.",
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <LegalPageHeader
          icon={TbFileText}
          title={termsContent.title}
          effectiveDate={termsContent.effectiveDate}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          <LegalToc page={termsContent} />
          <LegalContent page={termsContent} />
        </div>
      </Container>
    </div>
  );
}
