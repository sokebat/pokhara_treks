import type { LucideIcon } from "lucide-react";
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

export type NavSubItem = {
  title: string;
  url: string;
};

export type NavGroup = "content" | "operations" | "admin";

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  group?: NavGroup;
  items: NavSubItem[];
};

export const navGroupLabels: Record<NavGroup, string> = {
  content: "Content",
  operations: "Operations",
  admin: "Admin",
};

export const navItems: NavItem[] = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
    items: [],
  },
  {
    title: "Trips & Tours",
    url: "/dashboard/trips",
    icon: MountainSnowIcon,
    group: "content",
    items: [
      { title: "Treks", url: "/dashboard/trips/treks" },
      { title: "Short Treks & Day Hikes", url: "/dashboard/trips/short-treks" },
      { title: "Peak Climbing", url: "/dashboard/trips/peak-climbing" },
      { title: "Helicopter Tours", url: "/dashboard/trips/heli-tours" },
      { title: "Adventure Activities", url: "/dashboard/trips/adventures" },
      { title: "Tours", url: "/dashboard/trips/tours" },
    ],
  },
  {
    title: "Destinations",
    url: "/dashboard/destinations",
    icon: MapPinIcon,
    group: "content",
    items: [],
  },
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: NewspaperIcon,
    group: "content",
    items: [
      { title: "All Posts", url: "/dashboard/blog" },
      { title: "Categories", url: "/dashboard/blog/categories" },
    ],
  },
  {
    title: "FAQs",
    url: "/dashboard/faqs",
    icon: HelpCircleIcon,
    group: "content",
    items: [],
  },
  {
    title: "Bookings & Enquiries",
    url: "/dashboard/bookings",
    icon: CalendarCheckIcon,
    group: "operations",
    items: [
      { title: "Trip Enquiries", url: "/dashboard/bookings/enquiries" },
      { title: "Contact Messages", url: "/dashboard/bookings/messages" },
    ],
  },
  {
    title: "Guides & Team",
    url: "/dashboard/guides",
    icon: UsersRoundIcon,
    group: "operations",
    items: [],
  },
  {
    title: "Reviews & Testimonials",
    url: "/dashboard/reviews",
    icon: StarIcon,
    group: "operations",
    items: [],
  },
  {
    title: "Site Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
    group: "admin",
    items: [
      { title: "Contact & Office Info", url: "/dashboard/settings/contact" },
      { title: "Admin Users", url: "/dashboard/settings/users" },
    ],
  },
];
