import Link from "next/link";

import { cn } from "@/lib/utils";
import { navItems } from "@/constant/nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AdventureMenu,
  DestinationsMenu,
  MegaPanel,
  SimplePanel,
} from "@/components/layout/navbar";

interface DesktopNavProps {
  className?: string;
}

const DesktopNav = ({ className }: DesktopNavProps) => {
  return (
    <NavigationMenu className={cn("max-w-none", className)}>
      <NavigationMenuList className="flex-wrap gap-x-0.5 gap-y-1">
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="inline-flex h-9 cursor-pointer items-center rounded-lg px-2.5 py-1.5 text-sm font-semibold tracking-wide uppercase hover:bg-muted hover:text-accent"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger className="cursor-pointer text-sm font-semibold tracking-wide uppercase hover:text-accent">
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {item.href === "/destinations" ? (
                  <DestinationsMenu />
                ) : item.href === "/activity" ? (
                  <AdventureMenu />
                ) : item.type === "mega" ? (
                  <MegaPanel groups={item.groups} />
                ) : (
                  <SimplePanel
                    items={item.children}
                    allHref={
                      item.href === "/heli-tours" ? item.href : undefined
                    }
                    allLabel={
                      item.href === "/heli-tours"
                        ? "All helicopter tours"
                        : undefined
                    }
                  />
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
