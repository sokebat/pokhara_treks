import Link from "next/link";

import { cn } from "@/lib/utils";
import { navItems } from "@/constant/nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MegaPanel from "./MegaPanel";
import NavParentTrigger from "./NavParentTrigger";
import SimplePanel from "./SimplePanel";

interface DesktopNavProps {
  className?: string;
}

const DesktopNav = ({ className }: DesktopNavProps) => {
  return (
    <NavigationMenu
      closeDelay={200}
      className={cn("w-full max-w-none justify-center", className)}
    >
      <NavigationMenuList className="flex-wrap gap-x-0.5 gap-y-1">
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="font-heading inline-flex h-8 cursor-pointer items-center rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide uppercase hover:bg-muted hover:text-chart-2 lg:h-9 lg:px-2.5 lg:text-sm"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavParentTrigger href={item.href}>{item.label}</NavParentTrigger>
              <NavigationMenuContent>
                {item.type === "mega" ? (
                  <MegaPanel groups={item.groups} />
                ) : (
                  <SimplePanel
                    items={item.children}
                    allHref={item.href}
                    allLabel={
                      item.allLabel ?? `All ${item.label.toLowerCase()}`
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
