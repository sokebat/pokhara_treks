import { Button } from "@/components/ui/button";
import {
  platformSummaries,
  type Testimonial,
} from "@/features/site/home/constant/testimonials";

import PlatformLogo from "./PlatformLogo";

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
        <span className="text-[0.7rem] text-muted-foreground">{testimonial.date}</span>
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

export default TestimonialMeta;
