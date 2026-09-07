import {
  TbArrowRight,
  TbMapPin,
  TbMountain,
} from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TripListingCard, listingCardGridClass } from "@/features/site/listing";
import { regionPath, getRegionBySlug } from "@/features/site/region/constant/regions";
import type {
  PublicRegion,
  PublicRegionFact,
  PublicRegionLink,
} from "@/features/site/region/types/public-region";
import { getRegionTrips } from "@/features/site/trekking/constant/trekking";
import {
  CTASection,
  FaqSection,
  FindUsSection,
} from "@/features/site/sections";
import { regionJsonLd } from "@/lib/seo";

type RegionViewProps = {
  region: PublicRegion;
  otherRegions: PublicRegionLink[];
};

const RegionFactsTable = ({ facts }: { facts: PublicRegionFact[] }) => {
  if (facts.length === 0) return null;

  return (
    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="px-0">
        <Table className="min-w-[640px] text-[15px]">
          <TableHeader>
            <TableRow className="bg-secondary/60 hover:bg-secondary/60">
              {facts.map((fact) => (
                <TableHead
                  key={fact.label}
                  className="px-4 py-3 text-muted-foreground"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <fact.icon className="size-4 text-chart-2" />
                    {fact.label}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {facts.map((fact) => (
                <TableCell
                  key={fact.label}
                  className="px-4 py-3.5 font-semibold whitespace-normal"
                >
                  {fact.value}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

function tripsForRegion(region: PublicRegion) {
  const staticLabel = getRegionBySlug(region.slug)?.label;
  const candidates = [
    region.title,
    staticLabel,
    region.shortLabel ? `${region.shortLabel} Region` : null,
    region.shortLabel,
  ].filter((label): label is string => Boolean(label));

  for (const label of candidates) {
    const trips = getRegionTrips(label);
    if (trips.length > 0) return trips;
  }

  return [];
}

const RegionView = ({ region, otherRegions }: RegionViewProps) => {
  const trips = tripsForRegion(region);
  const overlayLabel = region.shortLabel || region.title;

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

              {region.tagline ? (
                <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
                  {region.tagline}
                </p>
              ) : null}

              {region.bodyHtml ? (
                <div
                  className="region-body mt-4 space-y-4 text-base leading-7 text-muted-foreground [&_a]:font-medium [&_a]:text-chart-2 [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:mt-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-5 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:leading-7 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5"
                  dangerouslySetInnerHTML={{ __html: region.bodyHtml }}
                />
              ) : null}

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
                      <TbMountain className="size-4 text-sky" />
                      <span className="text-sm font-semibold tracking-wide text-sky uppercase">
                        {overlayLabel}
                      </span>
                    </div>

                    {region.tagline ? (
                      <p className="mt-1.5 text-base font-semibold text-primary-foreground sm:text-lg">
                        {region.tagline}
                      </p>
                    ) : null}

                    {region.location ? (
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-foreground/75">
                        <TbMapPin className="size-3.5" />
                        {region.location}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RegionFactsTable facts={region.facts} />

          {trips.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                Treks in this region
              </h2>
              <div className={listingCardGridClass}>
                {trips.map((trip, index) => (
                  <TripListingCard
                    key={trip.href}
                    trip={trip}
                    index={index}
                    ctaLabel="View Trek"
                  />
                ))}
              </div>
            </div>
          ) : null}

          {otherRegions.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                Other regions
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {otherRegions.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={regionPath(item.slug)}
                      className="inline-flex rounded-md border-2 border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-chart-2 hover:text-chart-2"
                    >
                      {item.shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>

      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
};

export default RegionView;
