"use client";

import * as React from "react";
import {
  CalendarCheckIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MountainSnowIcon,
  NewspaperIcon,
  SettingsIcon,
  StarIcon,
  UsersRoundIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import SidebarUserMenu from "@/features/auth/components/SidebarUserMenu";
import { siteInfo } from "@/constant/site";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      items: [],
    },
    {
      title: "Trips & Tours",
      url: "#",
      icon: MountainSnowIcon,
      items: [
        { title: "Treks", url: "#" },
        { title: "Short Treks & Day Hikes", url: "#" },
        { title: "Peak Climbing", url: "#" },
        { title: "Helicopter Tours", url: "#" },
        { title: "Adventure Activities", url: "#" },
        { title: "Tours", url: "#" },
      ],
    },
    {
      title: "Destinations",
      url: "#",
      icon: MapPinIcon,
      items: [],
    },
    {
      title: "Bookings & Enquiries",
      url: "#",
      icon: CalendarCheckIcon,
      items: [
        { title: "Trip Enquiries", url: "#", isActive: true },
        { title: "Contact Messages", url: "#" },
      ],
    },
    {
      title: "Guides & Team",
      url: "#",
      icon: UsersRoundIcon,
      items: [],
    },
    {
      title: "Reviews & Testimonials",
      url: "#",
      icon: StarIcon,
      items: [],
    },
    {
      title: "Blog",
      url: "#",
      icon: NewspaperIcon,
      items: [
        { title: "All Posts", url: "#" },
        { title: "Categories", url: "#" },
      ],
    },
    {
      title: "FAQs",
      url: "#",
      icon: HelpCircleIcon,
      items: [],
    },
    {
      title: "Site Settings",
      url: "#",
      icon: SettingsIcon,
      items: [
        { title: "Contact & Office Info", url: "#" },
        { title: "Admin Users", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <MountainSnowIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">{siteInfo.name}</span>
                <span className="text-xs">Admin Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} className="font-medium" />}
                >
                  <item.icon className="size-4" />
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          isActive={subItem.isActive}
                          render={<a href={subItem.url} />}
                        >
                          {subItem.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarUserMenu />
    </Sidebar>
  );
}
