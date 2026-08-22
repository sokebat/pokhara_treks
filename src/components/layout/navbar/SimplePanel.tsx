import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavLeaf } from "@/constant/nav";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface SimplePanelProps {
  items: NavLeaf[];
}

const SimplePanel = ({ items }: SimplePanelProps) => {
  const wide = items.length > 8;

  return (
    <div
      className={cn(
        "grid gap-x-4 gap-y-0.5 p-2",
        wide ? "w-[30rem] grid-cols-2" : "w-64 grid-cols-1"
      )}
    >
      {items.map((leaf) => (
        <NavigationMenuLink
          key={leaf.href}
          closeOnClick
          render={<Link href={leaf.href} />}
          className="rounded-md px-2 py-1.5 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-accent"
        >
          {leaf.label}
        </NavigationMenuLink>
      ))}
    </div>
  );
};

export default SimplePanel;
