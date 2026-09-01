"use client";

import { useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { QuoteIcon, StarIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
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
} from "@/features/home/constant/testimonials";

const platformMeta: Record<ReviewPlatform, { label: string; letter: string }> =
  {
    tripadvisor: { label: "TripAdvisor", letter: "T" },
    google: { label: "Google", letter: "G" },
  };

const avatarPalette = [
  "bg-accent text-accent-foreground",
  "bg-primary text-primary-foreground",
  "bg-chart-3 text-white",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Avatar = ({ name, index = 0 }: { name: string; index?: number }) => (
  <span
    className={cn(
      "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
      avatarPalette[index % avatarPalette.length],
    )}
  >
    {getInitials(name)}
  </span>
);

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => (
  <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={cn(
          "size-3.5",
          i < Math.round(rating)
            ? "fill-accent text-accent"
            : "fill-transparent text-muted-foreground/30",
        )}
      />
    ))}
  </div>
);

const PlatformBadge = ({ platform }: { platform: ReviewPlatform }) => {
  const meta = platformMeta[platform];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1 text-[0.7rem] font-semibold",
        platform === "tripadvisor"
          ? "bg-primary/10 text-primary"
          : "bg-chart-3/15 text-chart-3",
      )}
    >
      <span
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white",
          platform === "tripadvisor" ? "bg-primary" : "bg-chart-3",
        )}
      >
        {meta.letter}
      </span>
      {meta.label}
    </span>
  );
};

const TestimonialMeta = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
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
  <div className="flex flex-col gap-6 rounded-md bg-primary p-6 text-primary-foreground sm:p-7">
    <div>
      <div className="flex items-end gap-3">
        <p className="text-5xl font-bold">{reviewSummary.average}</p>
        <StarRating rating={reviewSummary.average} className="mb-1.5" />
      </div>

      <p className="mt-1.5 text-sm text-primary-foreground/70">
        {reviewSummary.totalReviews} reviews across TripAdvisor and Google
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {platformSummaries.map((platform) => (
        <Link
          key={platform.platform}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary-foreground/10 p-3 ring-1 ring-primary-foreground/10 transition-colors hover:bg-primary-foreground/15"
        >
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded-md text-xs font-bold text-white",
              platform.platform === "tripadvisor" ? "bg-accent" : "bg-chart-5",
            )}
          >
            {platformMeta[platform.platform].letter}
          </span>

          <p className="mt-2 text-lg font-bold">{platform.rating}</p>

          <p className="text-xs font-medium text-primary-foreground/80">
            {platform.label} · {platform.reviews} reviews
          </p>

          <span className="mt-1.5 inline-block text-[0.7rem] font-semibold text-accent">
            Read on {platform.label} &rarr;
          </span>
        </Link>
      ))}
    </div>

    <div className="flex flex-col gap-1.5">
      {reviewSummary.breakdown.map(({ stars, percent }) => (
        <div key={stars} className="flex items-center gap-2 text-xs">
          <span className="w-8 shrink-0 text-primary-foreground/70">
            {stars} &#9733;
          </span>

          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary-foreground/15">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${percent}%` }}
            />
          </div>

          <span className="w-8 shrink-0 text-right text-primary-foreground/70">
            {percent}%
          </span>
        </div>
      ))}
    </div>
  </div>
);

const FeaturedTestimonialCard = () => (
  <div className="relative flex flex-col justify-between rounded-md border border-border bg-card p-6 sm:p-8">
    <span
      aria-hidden
      className="flex size-14 items-center justify-center rounded-full bg-accent/10"
    >
      <QuoteIcon className="size-6 fill-accent text-accent" />
    </span>

    <div className="mt-4">
      <StarRating rating={featuredTestimonial.rating} />

      <p className="mt-4 max-w-xl text-xl leading-snug font-semibold text-balance text-foreground sm:text-2xl">
        {featuredTestimonial.quote}
      </p>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <Avatar name={featuredTestimonial.name} index={0} />

      <div>
        <p className="text-sm font-semibold text-foreground">
          {featuredTestimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {featuredTestimonial.context}
        </p>
      </div>
    </div>

    <TestimonialMeta testimonial={featuredTestimonial} />
  </div>
);

const cardTint = [
  "border-accent/20 hover:border-accent/40",
  "border-primary/15 hover:border-primary/30",
  "border-chart-3/20 hover:border-chart-3/40",
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
      "relative h-full rounded-md transition-colors",
      cardTint[index % cardTint.length],
    )}
  >
    <QuoteIcon
      aria-hidden
      className="absolute top-5 right-5 size-8 fill-current text-foreground/5"
    />

    <CardContent className="flex flex-1 flex-col">
      <div className="flex items-center gap-3">
        <Avatar name={testimonial.name} index={index} />

        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.context}
          </p>
        </div>
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
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Reviews and Press"
          title="Your words, not ours"
          description="Every review names the guide who led it, so you can ask for the same guide by name."
          action={
            <Button
              size="lg"
              className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Read all {reviewSummary.totalReviews} reviews
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[22rem_1fr]">
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
