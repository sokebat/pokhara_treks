import { TbQuote } from "react-icons/tb";

import Avatar from "@/components/shared/Avatar";
import StarRating from "@/components/shared/StarRating";
import { featuredTestimonial } from "@/features/site/home/constant/testimonials";

import TestimonialMeta from "./TestimonialMeta";

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

export default FeaturedTestimonialCard;
