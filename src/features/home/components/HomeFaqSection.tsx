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
import { homeFaqs } from "@/features/home/constant/faq";
import { siteInfo } from "@/constant/site";

const HomeFaqSection = () => {
  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[20rem_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeader
              title="Things to know before you book"
              description="The ten questions we are asked most, answered plainly. Prices, permits and rules are the ones on this page and on every trip page."
            />

            <div className="mt-6 flex flex-col gap-2.5">
              <Button
                nativeButton={false}
                render={<Link href="/faq" />}
                variant="accent"
                size="xl"
                className="w-full"
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
                className="w-full"
              >
                <FaWhatsapp className="size-4" />
                WhatsApp Us
              </Button>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Not answered here? Ask the office directly. A person replies,
                usually the same day.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card px-6 sm:px-8">
            <Accordion defaultValue={[homeFaqs[0].id]}>
              {homeFaqs.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="py-5 text-base font-semibold text-foreground">
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
      </Container>
    </section>
  );
};

export default HomeFaqSection;
