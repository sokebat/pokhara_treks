import type { Metadata } from "next";
import { ScrollTextIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import LegalContent from "@/components/legal/LegalContent";
import LegalToc from "@/components/legal/LegalToc";
import { termsContent } from "@/constant/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that apply to bookings and trips with Pokhara Treks & Expeditions.",
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <ScrollTextIcon className="size-6" />
          </span>
          <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
            {termsContent.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective {termsContent.effectiveDate}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[220px_1fr]">
          <LegalToc page={termsContent} />
          <LegalContent page={termsContent} />
        </div>
      </Container>
    </div>
  );
}
