import { TbCalendarCheck, TbMail, TbMountain, TbNews, TbStar } from "react-icons/tb";
import type { IconType } from "react-icons";

export type Stat = {
  label: string;
  value: string;
  helper: string;
  icon: IconType;
};

export const stats: Stat[] = [
  {
    label: "Trip Enquiries",
    value: "18",
    helper: "This month",
    icon: TbCalendarCheck,
  },
  {
    label: "Published Treks",
    value: "24",
    helper: "Across all categories",
    icon: TbMountain,
  },
  {
    label: "Average Rating",
    value: "4.9",
    helper: "From 202 reviews",
    icon: TbStar,
  },
  {
    label: "Contact Messages",
    value: "5",
    helper: "Unread",
    icon: TbMail,
  },
];

export type EnquiryStatus = "New" | "Contacted" | "Confirmed";

export type Enquiry = {
  name: string;
  trek: string;
  date: string;
  status: EnquiryStatus;
};

export const recentEnquiries: Enquiry[] = [
  {
    name: "Sanne V.",
    trek: "Annapurna Base Camp Trek",
    date: "2 hours ago",
    status: "New",
  },
  {
    name: "Helen M.",
    trek: "Ghorepani Poon Hill Trek",
    date: "5 hours ago",
    status: "Contacted",
  },
  {
    name: "Rachel T.",
    trek: "Mardi Himal Trek",
    date: "Yesterday",
    status: "Confirmed",
  },
  {
    name: "Priya K.",
    trek: "Australian Camp & Dhampus",
    date: "2 days ago",
    status: "Confirmed",
  },
  {
    name: "James O.",
    trek: "Upper Mustang Trek",
    date: "3 days ago",
    status: "New",
  },
];

export type QuickAction = {
  label: string;
  href: string;
  icon: IconType;
};

export const quickActions: QuickAction[] = [
  {
    label: "View All Enquiries",
    href: "/dashboard/bookings/enquiries",
    icon: TbCalendarCheck,
  },
  {
    label: "Manage Treks",
    href: "/dashboard/trekking",
    icon: TbMountain,
  },
  {
    label: "Write a Blog Post",
    href: "/dashboard/blogs",
    icon: TbNews,
  },
];
