import { TbQuote } from "react-icons/tb";

import Avatar from "@/components/shared/Avatar";
import StarRating from "@/components/shared/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/features/site/home/constant/testimonials";

import TestimonialMeta from "./TestimonialMeta";

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
            <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.context}</p>
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

export default TestimonialCard;
