import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import {
  platformSummaries,
  reviewSummary,
} from "@/features/site/home/constant/testimonials";

import PlatformLogo from "./PlatformLogo";

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
            <p className="text-xl leading-none font-bold sm:text-2xl">{platform.rating}</p>
          </div>
          <p className="mt-2 text-xs text-primary-foreground/75">
            {platform.reviews} reviews
          </p>
          <Button
            nativeButton={false}
            render={
              <a href={platform.href} target="_blank" rel="noopener noreferrer" />
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

export default RatingSummaryCard;
