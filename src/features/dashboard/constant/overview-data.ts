import type { LucideIcon } from "lucide-react";
import {
  CalendarCheckIcon,
  MailIcon,
  MountainSnowIcon,
  NewspaperIcon,
  StarIcon,
} from "lucide-react";

export type Stat = {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  {
    label: "Trip Enquiries",
    value: "18",
    helper: "This month",
    icon: CalendarCheckIcon,
  },
  {
    label: "Published Treks",
    value: "24",
    helper: "Across all categories",
    icon: MountainSnowIcon,
  },
  {
    label: "Average Rating",
    value: "4.9",
    helper: "From 202 reviews",
    icon: StarIcon,
  },
  {
    label: "Contact Messages",
    value: "5",
    helper: "Unread",
    icon: MailIcon,
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
  icon: LucideIcon;
};

export const quickActions: QuickAction[] = [
  {
    label: "View All Enquiries",
    href: "/dashboard/bookings/enquiries",
    icon: CalendarCheckIcon,
  },
  {
    label: "Manage Treks",
    href: "/dashboard/trips/treks",
    icon: MountainSnowIcon,
  },
  {
    label: "Write a Blog Post",
    href: "/dashboard/blog",
    icon: NewspaperIcon,
  },
];
