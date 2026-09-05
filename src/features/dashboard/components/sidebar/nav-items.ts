import { TbCalendarCheck, TbHelpCircle, TbLayoutDashboard, TbMountain, TbNews, TbSettings, TbStar, TbUsersGroup } from "react-icons/tb";
import type { IconType } from "react-icons";

export type NavSubItem = {
  title: string;
  url: string;
};

export type NavGroup = "content" | "operations" | "admin";

export type NavItem = {
  title: string;
  url: string;
  icon: IconType;
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
    icon: TbLayoutDashboard,
    items: [],
  },
  {
    title: "Trips & Tours",
    url: "/dashboard/trips",
    icon: TbMountain,
    group: "content",
    items: [
      { title: "Treks", url: "/dashboard/trips/treks" },
      { title: "Short Treks & Day Hikes", url: "/dashboard/trips/short-treks" },
      { title: "Helicopter Tours", url: "/dashboard/trips/heli-tours" },
      { title: "Adventure Activities", url: "/dashboard/trips/adventures" },
      { title: "Tours", url: "/dashboard/trips/tours" },
    ],
  },
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: TbNews,
    group: "content",
    items: [
      { title: "All Posts", url: "/dashboard/blog" },
      { title: "Categories", url: "/dashboard/blog/categories" },
    ],
  },
  {
    title: "FAQs",
    url: "/dashboard/faqs",
    icon: TbHelpCircle,
    group: "content",
    items: [],
  },
  {
    title: "Bookings & Enquiries",
    url: "/dashboard/bookings",
    icon: TbCalendarCheck,
    group: "operations",
    items: [
      { title: "Trip Enquiries", url: "/dashboard/bookings/enquiries" },
      { title: "Contact Messages", url: "/dashboard/bookings/messages" },
    ],
  },
  {
    title: "Guides & Team",
    url: "/dashboard/guides",
    icon: TbUsersGroup,
    group: "operations",
    items: [],
  },
  {
    title: "Reviews & Testimonials",
    url: "/dashboard/reviews",
    icon: TbStar,
    group: "operations",
    items: [],
  },
  {
    title: "Site Settings",
    url: "/dashboard/settings",
    icon: TbSettings,
    group: "admin",
    items: [
      { title: "Contact & Office Info", url: "/dashboard/settings/contact" },
      { title: "Admin Users", url: "/dashboard/settings/users" },
    ],
  },
];
