import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { guides } from "@/features/home/constant/home-data";
import GuideCard from "@/features/home/components/GuideCard";

const GuidesSection = () => {
  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Meet the guides"
          description="Every guide has a name, a face and a licence number."
          action={
            <Button
              nativeButton={false}
              render={<Link href="/our-team" />}
              variant="accent"
              size="xl"
            >
              Meet the whole team
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <GuideCard key={guide.name} guide={guide} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GuidesSection;
