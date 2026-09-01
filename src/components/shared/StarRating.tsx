import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  className?: string;
};

const StarRating = ({ rating, className }: StarRatingProps) => (
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

export default StarRating;
