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
    <SiTripadvisor className={cn("size-5 text-chart-2", className)} />
  );

const TestimonialMeta = ({ testimonial }: { testimonial: Testimonial }) => {
  const platform = platformSummaries.find(
    (item) => item.platform === testimonial.platform,
  );

  if (!platform) return null;

  return (
    <div className="mt-4 flex flex-col gap-3 border-t-2 border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-secondary-foreground">
          {testimonial.trek}
        </span>

        <span className="text-[0.7rem] text-muted-foreground">
          {testimonial.date}
        </span>

        <span className="text-[0.7rem] text-muted-foreground">
          Guided by{" "}
        <span className="font-semibold text-chart-2">{testimonial.guide}</span>
        </span>
      </div>

      <Button
        nativeButton={false}
        render={
          <a href={platform.href} target="_blank" rel="noopener noreferrer" />
        }
        variant="outline"
        size="sm"
      >
        <PlatformLogo platform={platform.platform} className="size-3.5" />
        {platform.label}
      </Button>
    </div>
  );
};

const RatingSummaryCard = () => (
  <div className="relative flex flex-col gap-5 overflow-hidden rounded-md bg-primary p-6 text-primary-foreground sm:p-7">
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
    />
    <div>
      <div className="flex items-end gap-3">
        <p className="text-4xl font-bold sm:text-5xl">{reviewSummary.average}</p>
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
        <div
          key={platform.platform}
          className="flex flex-col rounded-md border-2 border-primary-foreground/20 bg-primary-foreground/10 p-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-card">
              <PlatformLogo platform={platform.platform} />
            </span>
            <p className="text-xl font-bold leading-none sm:text-2xl">{platform.rating}</p>
          </div>

          <p className="mt-2 text-xs text-primary-foreground/75">
            {platform.reviews} reviews
          </p>

          <Button
            nativeButton={false}
            render={
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="mt-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Read reviews
          </Button>
        </div>
      ))}
    </div>
  </div>
);

const FeaturedTestimonialCard = () => (
  <div className="flex h-full flex-col rounded-md border-2 border-primary/20 bg-card p-6 sm:p-8">
    <div className="flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar name={featuredTestimonial.name} index={0} />

        <div className="min-w-0">
          <p className="text-sm font-semibold text-primary">
            {featuredTestimonial.name}
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            {featuredTestimonial.context}
          </p>
        </div>
      </div>

      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10"
      >
        <TbQuote className="size-4 fill-chart-2 text-chart-2" />
      </span>
    </div>

    <StarRating rating={featuredTestimonial.rating} className="mt-4" />

    <p className="mt-2 flex-1 text-base leading-7 text-foreground sm:text-lg">
      {featuredTestimonial.quote}
    </p>

    <TestimonialMeta testimonial={featuredTestimonial} />
  </div>
);

const cardTint = [
  "border-2 border-accent/35 hover:border-accent",
  "border-2 border-primary/25 hover:border-primary/45",
  "border-2 border-sky/55 hover:border-sky",
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
      "relative h-full rounded-md shadow-none ring-0",
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
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10"
        >
          <TbQuote className="size-4 fill-chart-2 text-chart-2" />
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

        <div className="mt-8 grid gap-3 lg:grid-cols-[26rem_1fr]">
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