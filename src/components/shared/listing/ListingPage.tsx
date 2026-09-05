import type { ReactNode } from "react";

import Container from "@/components/shared/Container";
import CTASection from "@/components/shared/CTASection";
import FaqSection from "@/components/shared/FaqSection";
import FindUsSection from "@/components/shared/FindUsSection";
import ListingPageHeader from "@/components/shared/listing/ListingPageHeader";

type ListingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  headerId?: string;
  headerClassName?: string;
  children: ReactNode;
};

const ListingPage = ({
  eyebrow,
  title,
  description,
  headerId,
  headerClassName,
  children,
}: ListingPageProps) => (
  <div>
    <section className="bg-background pt-8 pb-8 sm:pt-12 sm:pb-10">
      <Container>
        <ListingPageHeader
          id={headerId}
          className={headerClassName}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </Container>
    </section>

    <FaqSection />
    <FindUsSection />
    <CTASection />
  </div>
);

export default ListingPage;
