import Link from "next/link";
import {
  ArrowRightIcon,
  CompassIcon,
  LandmarkIcon,
  MountainSnowIcon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  destinationColumns,
  featuredDestination,
  type DestinationIconKey,
} from "@/constant/destinations";
import { Button, buttonVariants } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const destinationIcons: Record<DestinationIconKey, LucideIcon> = {
  mountain: MountainSnowIcon,
  landmark: LandmarkIcon,
  compass: CompassIcon,
};

const DestinationsMenu = () => {
  return (
    <div className="flex w-4xl max-w-[85vw]">
      <div className="grid flex-1 grid-cols-3 gap-6 p-5">
        {destinationColumns.map((column) => {
          const Icon = destinationIcons[column.icon];

          return (
            <div key={column.title} className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
                <Icon className="size-3.5" />
                {column.title}
              </div>
              <ul className="mt-3 flex flex-col gap-0.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLink
                      closeOnClick
                      render={<Link href={link.href} />}
                      className="block rounded-md px-2 py-1.5 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-accent"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <NavigationMenuLink
                closeOnClick
                render={<Link href={column.viewAllHref} />}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-auto w-fit rounded-md border-border text-primary hover:border-accent hover:bg-accent/10 hover:text-accent",
                )}
              >
                View all
                <ArrowRightIcon className="size-3.5" />
              </NavigationMenuLink>
            </div>
          );
        })}
      </div>

      <div className="relative m-3 flex w-64 shrink-0 flex-col justify-end overflow-hidden rounded-lg bg-linear-to-br from-primary to-[oklch(0.33_0.07_253)] p-5 text-primary-foreground">
        <MountainSnowIcon className="absolute -top-6 -right-6 size-32 text-white/10" />
        <span className="w-fit rounded-md bg-accent px-2.5 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
          {featuredDestination.badge}
        </span>
        <h4 className="mt-3 text-lg leading-snug font-bold">
          {featuredDestination.title}
        </h4>
        <p className="mt-1 text-sm text-primary-foreground/80">
          {featuredDestination.description}
        </p>
        <Button
          nativeButton={false}
          render={<Link href={featuredDestination.href} />}
          variant="secondary"
          size="sm"
          className="mt-4 w-fit rounded-md"
        >
          Explore the trek
          <ArrowRightIcon className="size-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default DestinationsMenu;
