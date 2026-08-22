import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  tone?: "default" | "inverted";
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  action,
  tone = "default",
  className,
}: SectionHeaderProps) => {
  const isInverted = tone === "inverted";

  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-6",
        className
      )}
    >
      <div>
        <Badge
          className={cn(
            "tracking-widest uppercase",
            isInverted
              ? "bg-accent/15 text-accent"
              : "bg-accent/10 text-accent"
          )}
        >
          {eyebrow}
        </Badge>

        <h2
          className={cn(
            "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
            isInverted ? "text-primary-foreground" : "text-primary"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-2 max-w-xl",
              isInverted
                ? "text-primary-foreground/75"
                : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
};

export default SectionHeader;
