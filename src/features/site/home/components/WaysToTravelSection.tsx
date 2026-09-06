import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { travelWays } from "@/features/site/home/constant/ways-to-travel";

const WaysToTravelSection = () => (
  <section className="bg-card py-6 sm:py-8">
    <Container>
      <SectionHeader
        title="What would you like to do?"
        description="Every activity we run has a page behind it."
      />

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {travelWays.map((way) => (
          <Link
            key={way.title}
            href={way.href}
            className="group relative isolate block aspect-4/5 overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <Image
              src={way.image}
              alt={way.imageAlt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-primary from-[18%] via-primary/50 via-42% to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="line-clamp-3 text-base leading-snug font-bold text-pretty text-gold">
                {way.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default WaysToTravelSection;
