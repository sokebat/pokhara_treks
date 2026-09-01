import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

const SectionHeader = ({
  eyebrow,
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
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">
          {eyebrow}
        </span>
      </div>

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
