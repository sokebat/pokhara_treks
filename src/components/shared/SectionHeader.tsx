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
      "flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-6",
      className,
    )}
  >
    <div className="min-w-0">
      <span
        aria-hidden
        className="mb-2 block h-0.5 w-8 rounded-md bg-primary"
      />
      <h2 className="text-2xl font-bold text-balance text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
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
