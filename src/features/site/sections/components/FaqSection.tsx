import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeFaqs } from "@/features/site/sections/constant/faq";
import { siteInfo } from "@/constant/site";

interface FaqSectionProps {
  id?: string;
  className?: string;
  withContainer?: boolean;
}

const FaqSection = ({
  id,
  className,
  withContainer = true,
}: FaqSectionProps) => {
  const content = (
        <div className="grid gap-6 lg:grid-cols-[20rem_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeader
              title="Things to know before you book"
              description="The ten questions we are asked most, answered plainly. Prices, permits and rules are the ones on this page and on every trip page."
            />

            <div className="mt-5 flex flex-col gap-2.5">
              <Button
                nativeButton={false}
                render={<Link href="/faq" />}
                variant="accent"
                size="xl"
              >
                View all FAQs
              </Button>

              <Button
                nativeButton={false}
                render={
                  <a
                    href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="whatsapp"
                size="xl"
              >
                <FaWhatsapp className="size-4" />
                WhatsApp Us
              </Button>
            </div>

            <div className="mt-5 border-t-2 border-border pt-5">
              <p className="text-sm text-muted-foreground">
                Not answered here? Ask the office directly. A person replies,
                usually the same day.
              </p>
            </div>
          </div>

          <div className="rounded-md border-2 border-border bg-card px-4 sm:px-8">
            <Accordion defaultValue={[homeFaqs[0].id]}>
              {homeFaqs.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground sm:py-5 sm:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
  );

  return (
    <section
      id={id}
      className={cn("scroll-mt-32 bg-background py-6 sm:py-8", className)}
    >
      {withContainer ? <Container>{content}</Container> : content}
    </section>
  );
};

export default FaqSection;
