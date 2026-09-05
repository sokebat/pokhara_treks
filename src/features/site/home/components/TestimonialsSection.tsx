"use client";

import { useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  reviewSummary,
  testimonials,
} from "@/features/site/home/constant/testimonials";

import FeaturedTestimonialCard from "./FeaturedTestimonialCard";
import RatingSummaryCard from "./RatingSummaryCard";
import TestimonialCard from "./TestimonialCard";

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
