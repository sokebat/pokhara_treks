import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { guides } from "@/features/site/home/constant/guides";
import GuideCard from "@/features/site/home/components/GuideCard";

interface GuidesSectionProps {
  isactionactive: boolean;
}

const GuidesSection = ({ isactionactive }: GuidesSectionProps) => {
  return (
    <section className="bg-background py-6 sm:py-8">
      <Container>
        <SectionHeader
          title="Meet the guides"
          description="Every guide has a name, a face and a licence number."
          action={
            isactionactive ? (
              <Button
                nativeButton={false}
                render={<Link href="/about-us" />}
                variant="accent"
                size="xl"
              >
                Meet the whole team
              </Button>
            ) : null
          }
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <GuideCard key={guide.name} guide={guide} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GuidesSection;
