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
import { navBarItemClass } from "./nav-item-style";
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
      <NavigationMenuList className="flex-wrap gap-x-4 gap-y-1">
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className={navBarItemClass}
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
