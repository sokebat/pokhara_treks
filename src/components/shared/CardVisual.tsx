import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const tones = {
  primary: { bg: "bg-primary", icon: "text-primary" },
  accent: { bg: "bg-accent", icon: "text-accent" },
  "chart-3": { bg: "bg-chart-3", icon: "text-chart-3" },
};

type CardVisualProps = {
  icon: LucideIcon;
  tone?: keyof typeof tones;
  className?: string;
};

const CardVisual = ({
  icon: Icon,
  tone = "primary",
  className,
}: CardVisualProps) => {
  const colors = tones[tone];

  return (
    <div className={cn("relative overflow-hidden", colors.bg, className)}>
      <svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-3/4 w-full"
      >
        <path
          d="M0 200 L0 130 L60 80 L120 140 L180 60 L230 120 L290 40 L350 110 L400 90 L400 200 Z"
          className="fill-white/5"
        />
        <path
          d="M0 200 L0 160 L80 110 L140 150 L210 95 L260 145 L330 100 L400 150 L400 200 Z"
          className="fill-white/9"
        />
      </svg>

      <span className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full bg-background/95">
        <Icon className={cn("size-4", colors.icon)} strokeWidth={1.75} />
      </span>
    </div>
  );
};

export default CardVisual;
