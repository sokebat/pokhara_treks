"use client";

import { useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  isNavItemActive,
  isNavSubItemActive,
  navGroupLabels,
  navItems,
  type NavGroup,
  type NavItem,
} from "@/features/dashboard/components/sidebar/nav-items";

const menuButtonClass =
  "font-heading data-active:bg-secondary data-active:shadow-[inset_2px_0_0_0_var(--gold)]";

const NavLeaf = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const { state } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={isNavItemActive(item, pathname)}
        tooltip={state === "collapsed" ? item.title : undefined}
        render={<Link href={item.url} />}
        className={menuButtonClass}
      >
        <item.icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const NavCollapsedGroup = ({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) => (
  <SidebarMenuItem>
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <SidebarMenuButton
            isActive={isNavItemActive(item, pathname)}
            className={menuButtonClass}
          />
        }
      >
        <item.icon />
        <span>{item.title}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="start"
        className="min-w-52 rounded-md"
      >
        <DropdownMenuLabel className="font-heading text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
          {item.title}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {item.items.map((subItem) => (
          <DropdownMenuItem
            key={subItem.title}
            render={<Link href={subItem.url} />}
          >
            {subItem.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
);

const NavExpandedGroup = ({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) => {
  const active = isNavItemActive(item, pathname);

  return (
    <Collapsible defaultOpen={active} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton isActive={active} className={menuButtonClass} />
          }
        >
          <item.icon />
          <span>{item.title}</span>
          <TbChevronRight className="ml-auto size-4 transition-transform group-data-open/collapsible:rotate-90" />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  isActive={isNavSubItemActive(subItem.url, pathname)}
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

const NavItemRow = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const { state } = useSidebar();

  if (item.items.length === 0) {
    return <NavLeaf item={item} pathname={pathname} />;
  }

  if (state === "collapsed") {
    return <NavCollapsedGroup item={item} pathname={pathname} />;
  }

  return <NavExpandedGroup item={item} pathname={pathname} />;
};

const SidebarNav = () => {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  const ungrouped = navItems.filter((item) => !item.group);
  const groups = Object.keys(navGroupLabels) as NavGroup[];

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu className="gap-0.5">
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
            <SidebarGroupLabel className="font-heading text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase group-data-[collapsible=icon]:hidden">
              {navGroupLabels[group]}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-0.5">
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
