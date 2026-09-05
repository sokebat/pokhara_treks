import type { ReactNode } from "react";

import Container from "@/components/shared/Container";
import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";

type ListingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

const ListingPage = ({
  eyebrow,
  title,
  description,
  children,
}: ListingPageProps) => (
  <div>
    <section className="bg-background pt-8 pb-8 sm:pt-12 sm:pb-10">
      <Container>
        <div>
          <p className="text-sm font-semibold tracking-wide text-chart-2 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-balance text-primary sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        {children}
      </Container>
    </section>

    <FaqSection />
    <FindUsSection />
    <CTASection />
  </div>
);

export default ListingPage;
