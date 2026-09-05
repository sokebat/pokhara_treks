import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

const SectionHeader = ({
  title,
  description,
  action,
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6",
      className,
    )}
  >
    <div className="min-w-0">
      <span
        aria-hidden
        className="mb-3 block h-1 w-9 rounded-full bg-accent"
      />
      <h2 className="text-2xl font-bold text-balance text-primary sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
      )}
    </div>

    {action && (
      <div className="flex shrink-0 sm:justify-end">
        {action}
      </div>
    )}
  </div>
);

export default SectionHeader;
