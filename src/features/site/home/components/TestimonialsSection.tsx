"use client";

import { TbQuote } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { SiTripadvisor } from "react-icons/si";
import { useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import Avatar from "@/components/shared/Avatar";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  featuredTestimonial,
  platformSummaries,
  reviewSummary,
  testimonials,
  type ReviewPlatform,
  type Testimonial,
} from "@/features/site/home/constant/testimonials";

const platformMeta: Record<
  ReviewPlatform,
  { label: string; note: string }
> = {
  tripadvisor: {
    label: "TripAdvisor",
    note: "Independent traveller reviews",
  },
  google: {
    label: "Google",
    note: "Verified Google reviews",
  },
};

const PlatformLogo = ({
  platform,
  className,
}: {
  platform: ReviewPlatform;
  className?: string;
}) =>
  platform === "google" ? (
    <FcGoogle className={cn("size-5", className)} />
  ) : (
    <SiTripadvisor className={cn("size-5 text-[#00AF87]", className)} />
  );

const PlatformBadge = ({ platform }: { platform: ReviewPlatform }) => {
  const meta = platformMeta[platform];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary py-1 pr-2.5 pl-1 text-[0.7rem] font-semibold text-secondary-foreground">
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-card">
        <PlatformLogo platform={platform} className="size-2.5" />
      </span>
      {meta.label}
    </span>
  );
};

const TestimonialMeta = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mt-4 flex flex-wrap items-center gap-2 border-t-2 border-border pt-4">
    <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-secondary-foreground">
      {testimonial.trek}
    </span>

    <span className="text-[0.7rem] text-muted-foreground">
      {testimonial.date}
    </span>

    <span className="text-[0.7rem] text-muted-foreground">
      Guided by{" "}
      <span className="font-semibold text-accent">{testimonial.guide}</span>
    </span>

    <PlatformBadge platform={testimonial.platform} />
  </div>
);

const RatingSummaryCard = () => (
  <div className="flex flex-col gap-5 rounded-md bg-primary p-6 text-primary-foreground sm:p-7">
    <div>
      <div className="flex items-end gap-3">
        <p className="text-5xl font-bold">{reviewSummary.average}</p>
        <StarRating rating={reviewSummary.average} className="mb-1.5" />
      </div>

      <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
        {reviewSummary.totalReviews} reviews across TripAdvisor and Google.
        Every one names the guide, the trek, and the dates — written by people
        who actually walked it with us.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {platformSummaries.map((platform) => (
        <Link
          key={platform.platform}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border-2 border-primary-foreground/20 bg-primary-foreground/10 p-3 transition-colors hover:bg-primary-foreground/15"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-white">
            <PlatformLogo platform={platform.platform} />
          </span>

          <p className="mt-3 text-lg font-bold">{platform.rating}</p>

          <p className="text-xs font-medium text-primary-foreground/80">
            {platform.label} · {platform.reviews} reviews
          </p>

          <p className="mt-1 text-[0.7rem] leading-4 text-primary-foreground/60">
            {platformMeta[platform.platform].note}
          </p>

          <span className="mt-2 inline-block text-[0.7rem] font-semibold text-accent">
            Read on {platform.label} &rarr;
          </span>
        </Link>
      ))}
    </div>
  </div>
);

const FeaturedTestimonialCard = () => (
  <div className="flex h-full flex-col rounded-md border-2 border-border bg-card p-6 sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <StarRating rating={featuredTestimonial.rating} />
        <p className="mt-1 text-xl leading-snug font-semibold text-primary sm:text-2xl">
          {featuredTestimonial.quote}
        </p>
      </div>

      <span
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 sm:size-12"
      >
        <TbQuote className="size-5 fill-accent text-accent" />
      </span>
    </div>

    <div className="mt-auto pt-6">
      <div className="flex items-center gap-3">
        <Avatar name={featuredTestimonial.name} index={0} />

        <div>
          <p className="text-sm font-semibold text-primary">
            {featuredTestimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {featuredTestimonial.context}
          </p>
        </div>
      </div>

      <TestimonialMeta testimonial={featuredTestimonial} />
    </div>
  </div>
);

const cardTint = [
  "border-2 border-accent/20 hover:border-accent/40",
  "border-2 border-primary/15 hover:border-primary/30",
  "border-2 border-chart-3/20 hover:border-chart-3/40",
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => (
  <Card
    className={cn(
      "relative h-full rounded-md shadow-none ring-0 transition-colors",
      cardTint[index % cardTint.length],
    )}
  >
    <CardContent className="flex flex-1 flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar name={testimonial.name} index={index} />

          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.context}
            </p>
          </div>
        </div>

        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10"
        >
          <TbQuote className="size-4 fill-accent text-accent" />
        </span>
      </div>

      <StarRating rating={testimonial.rating} className="mt-3.5" />

      <p className="relative mt-2 flex-1 text-sm leading-6 text-foreground">
        {testimonial.quote}
      </p>

      <TestimonialMeta testimonial={testimonial} />
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Your words, not ours"
          description="Every review names the guide, so you can ask for them by name."
          action={
            <Button
              nativeButton={false}
              render={<Link href="/reviews" />}
              variant="accent"
              size="xl"
            >
              Read all {reviewSummary.totalReviews} reviews
            </Button>
          }
        />

        <div className="mt-8 grid gap-3 lg:grid-cols-[22rem_1fr]">
          <RatingSummaryCard />
          <FeaturedTestimonialCard />
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplayPlugin]}
          className="mt-6"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.name}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsSection;