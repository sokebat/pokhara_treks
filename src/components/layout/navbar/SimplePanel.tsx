import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavLeaf } from "@/constant/nav";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface SimplePanelProps {
  items: NavLeaf[];
  allHref?: string;
  allLabel?: string;
}

const SimplePanel = ({ items, allHref, allLabel }: SimplePanelProps) => {
  const wide = items.length > 8;

  return (
    <div
      className={cn(
        "grid gap-x-4 gap-y-0.5 p-2",
        wide ? "w-[30rem] grid-cols-2" : "w-64 grid-cols-1",
      )}
    >
      {allHref && allLabel && (
        <NavigationMenuLink
          closeOnClick
          render={<Link href={allHref} />}
          className={cn(
            "font-heading rounded-md px-2 py-1.5 text-sm font-semibold text-chart-2 hover:bg-muted hover:text-primary",
            wide && "col-span-2",
          )}
        >
          {allLabel}
        </NavigationMenuLink>
      )}
      {items.map((leaf) => (
        <NavigationMenuLink
          key={leaf.href}
          closeOnClick
          render={<Link href={leaf.href} />}
          className="rounded-md px-2 py-1.5 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-chart-2"
        >
          {leaf.label}
        </NavigationMenuLink>
      ))}
    </div>
  );
};

export default SimplePanel;
