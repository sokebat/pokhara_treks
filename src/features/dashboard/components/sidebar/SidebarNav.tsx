"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  navGroupLabels,
  navItems,
  type NavGroup,
  type NavItem,
} from "@/features/dashboard/components/sidebar/nav-items";

const isItemActive = (item: NavItem, pathname: string) =>
  item.items.length > 0
    ? pathname.startsWith(item.url)
    : pathname === item.url;

const NavItemRow = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const active = isItemActive(item, pathname);

  if (item.items.length === 0) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={active}
          render={<Link href={item.url} className="font-medium" />}
        >
          <item.icon className="size-4" />
          {item.title}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible defaultOpen={active} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              isActive={active}
              className="font-medium"
            />
          }
        >
          <item.icon className="size-4" />
          {item.title}
          <ChevronRightIcon className="ml-auto size-4 transition-transform group-data-open/collapsible:rotate-90" />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
            {item.items.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  isActive={pathname === subItem.url}
                  render={<Link href={subItem.url} />}
                >
                  {subItem.title}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const SidebarNav = () => {
  const pathname = usePathname();

  const ungrouped = navItems.filter((item) => !item.group);
  const groups = Object.keys(navGroupLabels) as NavGroup[];

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu className="gap-1">
          {ungrouped.map((item) => (
            <NavItemRow key={item.title} item={item} pathname={pathname} />
          ))}
        </SidebarMenu>
      </SidebarGroup>

      {groups.map((group) => {
        const items = navItems.filter((item) => item.group === group);
        if (items.length === 0) return null;

        return (
          <SidebarGroup key={group}>
            <SidebarGroupLabel>{navGroupLabels[group]}</SidebarGroupLabel>
            <SidebarMenu className="gap-1">
              {items.map((item) => (
                <NavItemRow key={item.title} item={item} pathname={pathname} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        );
      })}
    </SidebarContent>
  );
};

export default SidebarNav;
