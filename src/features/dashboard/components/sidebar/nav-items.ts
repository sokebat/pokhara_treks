import {
  TbCalendarCheck,
  TbHelpCircle,
  TbHelicopter,
  TbLayoutDashboard,
  TbMapPin,
  TbMountain,
  TbNews,
  TbParachute,
  TbSettings,
  TbStar,
  TbUsersGroup,
  TbWalk,
} from "react-icons/tb";
import type { IconType } from "react-icons";

import { navItems as siteNavItems } from "@/constant/nav";
import { faqCategories } from "@/features/site/faq/constant/types";
import { trekkingRegions } from "@/features/site/region/constant/regions";
import {
  contentGroupSlug,
  contentLeafSlug,
  contentPaths,
  pathSegmentAfter,
} from "@/features/dashboard/lib/content-paths";
import { slugify } from "@/lib/utils";

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

export type BreadcrumbCrumb = {
  title: string;
  href: string;
};

export const isNavItemActive = (item: NavItem, pathname: string) =>
  item.items.length > 0
    ? pathname === item.url || pathname.startsWith(`${item.url}/`)
    : pathname === item.url;

export const isNavSubItemActive = (url: string, pathname: string) => {
  if (pathname === url) return true;

  const addRegionUrl = `${contentPaths.regions}/new`;
  const listingUrl = `${contentPaths.regions}/listing`;

  return (
    url === addRegionUrl &&
    pathname.startsWith(`${contentPaths.regions}/`) &&
    pathname !== listingUrl
  );
};

export const getDashboardBreadcrumbs = (
  pathname: string,
): BreadcrumbCrumb[] => {
  const crumbs: BreadcrumbCrumb[] = [
    { title: "Overview", href: "/dashboard" },
  ];

  if (pathname === "/dashboard") return crumbs;

  const match = navItems
    .filter((item) => item.url !== "/dashboard")
    .filter(
      (item) =>
        pathname === item.url || pathname.startsWith(`${item.url}/`),
    )
    .sort((a, b) => b.url.length - a.url.length)[0];

  if (!match) return crumbs;

  crumbs.push({ title: match.title, href: match.url });

  const sub = match.items
    .filter(
      (item) =>
        pathname === item.url || pathname.startsWith(`${item.url}/`),
    )
    .sort((a, b) => b.url.length - a.url.length)[0];

  if (sub && sub.url !== match.url && sub.title !== match.title) {
    crumbs.push({ title: sub.title, href: sub.url });
  }

  if (match.url === contentPaths.regions) {
    const rest = pathSegmentAfter(contentPaths.regions, pathname);
    if (rest && rest !== "listing" && rest !== "new") {
      const region = trekkingRegions.find((item) => item.slug === rest);
      const title =
        region?.label ??
        rest
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ");
      crumbs.push({ title, href: pathname });
    }
  }

  return crumbs;
};

function siteNavByLabel(label: string) {
  return siteNavItems.find((item) => item.label === label);
}

function megaSubItems(label: string, root: string, allTitle: string) {
  const item = siteNavByLabel(label);
  const groups = item?.type === "mega" ? item.groups : [];

  return [
    { title: allTitle, url: root },
    ...groups.map((group) => ({
      title: group.label,
      url: `${root}/${contentGroupSlug(group.label, group.href)}`,
    })),
  ];
}

function simpleSubItems(label: string, root: string, allTitle: string) {
  const item = siteNavByLabel(label);
  const children = item?.type === "simple" ? item.children : [];

  return [
    { title: allTitle, url: root },
    ...children.map((child) => ({
      title: child.label,
      url: `${root}/${contentLeafSlug(child.href)}`,
    })),
  ];
}

export const navItems: NavItem[] = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: TbLayoutDashboard,
    items: [],
  },
  {
    title: "Regions",
    url: contentPaths.regions,
    icon: TbMapPin,
    group: "content",
    items: [
      {
        title: "Listing page",
        url: `${contentPaths.regions}/listing`,
      },
      {
        title: "Add region",
        url: `${contentPaths.regions}/new`,
      },
    ],
  },
  {
    title: "Trekking",
    url: contentPaths.trekking,
    icon: TbMountain,
    group: "content",
    items: megaSubItems("Trekking", contentPaths.trekking, "All Treks"),
  },
  {
    title: "Heli Tour",
    url: contentPaths.heliTours,
    icon: TbHelicopter,
    group: "content",
    items: simpleSubItems(
      "Heli Tour",
      contentPaths.heliTours,
      "All Helicopter Tours",
    ),
  },
  {
    title: "Activity",
    url: contentPaths.activity,
    icon: TbParachute,
    group: "content",
    items: megaSubItems("Activity", contentPaths.activity, "All Activities"),
  },
  {
    title: "Tours",
    url: contentPaths.tours,
    icon: TbWalk,
    group: "content",
    items: megaSubItems("Tours", contentPaths.tours, "All Tours"),
  },
  {
    title: "FAQ",
    url: contentPaths.faq,
    icon: TbHelpCircle,
    group: "content",
    items: [
      { title: "All FAQs", url: contentPaths.faq },
      ...faqCategories.map((category) => ({
        title: category,
        url: `${contentPaths.faq}/${slugify(category)}`,
      })),
    ],
  },
  {
    title: "Blogs",
    url: contentPaths.blogs,
    icon: TbNews,
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
