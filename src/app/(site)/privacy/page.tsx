import { TbShieldCheck } from "react-icons/tb";
import type { Metadata } from "next";

import Container from "@/components/shared/Container";
import { privacyContent } from "@/features/site/legal/constant/legal";
import LegalToc from "@/features/site/legal/components/LegalToc";
import LegalContent from "@/features/site/legal/components/LegalContent";
import LegalPageHeader from "@/features/site/legal/components/LegalPageHeader";

import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/privacy");

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <LegalPageHeader
          icon={TbShieldCheck}
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
