import { cn } from "@/lib/utils";

type ListingPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
  className?: string;
};

const ListingPageHeader = ({
  eyebrow,
  title,
  description,
  id,
  className,
}: ListingPageHeaderProps) => (
  <div id={id} className={cn(className)}>
    <p className="text-sm font-semibold tracking-wide text-accent uppercase">
      {eyebrow}
    </p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance text-primary sm:text-4xl">
      {title}
    </h1>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
      {description}
    </p>
  </div>
);

export default ListingPageHeader;
