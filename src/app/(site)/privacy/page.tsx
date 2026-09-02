import type { Metadata } from "next";
import { ShieldCheckIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import LegalContent from "@/features/legal/components/LegalContent";
import LegalPageHeader from "@/features/legal/components/LegalPageHeader";
import LegalToc from "@/features/legal/components/LegalToc";
import { privacyContent } from "@/features/legal/constant/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pokhara Treks & Expeditions collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <LegalPageHeader
          icon={ShieldCheckIcon}
          title={privacyContent.title}
          effectiveDate={privacyContent.effectiveDate}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          <LegalToc page={privacyContent} />
          <LegalContent page={privacyContent} />
        </div>
      </Container>
    </div>
  );
}
