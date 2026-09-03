import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const FounderNoteSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

             <div>
            <SectionHeader title="A note from our founders" />

            <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
              <p className="leading-7">
                We started this company so that women from these valleys could
                lead treks, not only cook and carry for the people who do. And
                because so many women wrote to us saying they had always wanted
                to walk in Nepal and had never felt able to come alone.
              </p>
              <p className="leading-7">
                What we want for you is simple. That you arrive not knowing
                whether you can do this, and come back knowing that you can.
                That you walk at your own pace, with a guide who has walked it a
                hundred times and still stops for the view.
              </p>
              <p className="leading-7">
                What we are building for the women who work with us is just as
                simple. Proper wages, insurance, training every season, and a
                job that is still there next year. The woman carrying your bag
                goes home to her own family, paid.
              </p>
              <p className="leading-7">
                Come and find us at the office in Lakeside. We are usually
                there, and the tea is free.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-foreground">Pushpa Sunar</p>
              <p className="text-sm text-muted-foreground">
                Founder and guide, Pokhara Treks and Expeditions
              </p>
            </div>

            {/* <Button
              nativeButton={false}
              render={<Link href="/our-story" />}
              size="xl"
              className="mt-6"
            >
              Read our story
            </Button> */}
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-md lg:aspect-auto lg:min-h-full">
            <Image
              src="/images/hero-women-trekking.jpg"
              alt="A woman trekker looking out over a snow-capped Himalayan mountain range"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[68%_center]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
            />
          </div>

       
        </div>
      </Container>
    </section>
  );
};

export default FounderNoteSection;
