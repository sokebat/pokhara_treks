import { TbArrowRight, TbMapPin } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import type { TrekkingRegion } from "@/features/site/region/constant/regions";
import { trekkingRegions } from "@/features/site/region/constant/regions";
import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";
import { regionJsonLd } from "@/lib/seo";

type RegionViewProps = {
  region: TrekkingRegion;
};

const RegionView = ({ region }: RegionViewProps) => {
  const Icon = region.icon;
  const otherRegions = trekkingRegions.filter(
    (item) => item.slug !== region.slug,
  );

  return (
    <div>
      <JsonLd data={regionJsonLd(region)} />
      <section className="bg-background pt-10 pb-8 sm:pt-12 sm:pb-10">
        <Container>
          <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                Trekking Region
              </p>

              <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {region.title}
              </h1>

              <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
                {region.tagline}
              </p>

              <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
                {region.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Button
                nativeButton={false}
                render={<Link href="/trip" />}
                variant="accent"
                size="xl"
                className="mt-6"
              >
                See all treks
                <TbArrowRight className="size-4" />
              </Button>
            </div>

            <div className="relative min-h-56 overflow-hidden rounded-md border-2 border-border sm:min-h-72">
              <Image
                src={region.image}
                alt={region.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/30 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-sky" />
                      <span className="text-sm font-semibold tracking-wide text-sky uppercase">
                        {region.shortLabel}
                      </span>
                    </div>

                    <p className="mt-1.5 text-base font-semibold text-primary-foreground sm:text-lg">
                      {region.tagline}
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-foreground/75">
                      <TbMapPin className="size-3.5" />
                      {region.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {region.facts.map(({ value, label, icon: FactIcon }) => (
              <div
                key={label}
                className="rounded-md border-2 border-border bg-card p-3 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-bold tracking-tight text-primary sm:text-base lg:text-lg">
                    {value}
                  </span>
                  <FactIcon
                    className="size-5 shrink-0 text-chart-2"
                    strokeWidth={1.75}
                  />
                </div>

                <h2 className="mt-3 text-sm font-semibold text-foreground">
                  {label}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border-2 border-border bg-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              What people walk here
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {region.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              Other regions
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {otherRegions.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/region/${item.slug}`}
                    className="inline-flex rounded-md border-2 border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-chart-2 hover:text-chart-2"
                  >
                    {item.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
};

export default RegionView;
