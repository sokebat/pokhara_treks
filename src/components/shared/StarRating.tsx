import { TbStar, TbStarFilled } from "react-icons/tb";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  className?: string;
};

const StarRating = ({ rating, className }: StarRatingProps) => (
  <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
    {Array.from({ length: 5 }).map((_, i) =>
      i < Math.round(rating) ? (
        <TbStarFilled key={i} className="size-3.5 text-gold" />
      ) : (
        <TbStar key={i} className="size-3.5 text-muted-foreground/30" />
      ),
    )}
  </div>
);

export default StarRating;
