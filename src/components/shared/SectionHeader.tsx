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
      "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
      className,
    )}
  >
    <div>
      <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
      )}
    </div>

    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export default SectionHeader;
