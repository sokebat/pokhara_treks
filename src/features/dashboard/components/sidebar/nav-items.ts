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
} from "react-icons/tb";
import type { IconType } from "react-icons";

import { faqCategories } from "@/features/site/faq/constant/types";
import {
  getRegionBySlug,
  trekkingRegions,
} from "@/features/site/region/constant/regions";
import {
  contentMetaPath,
  contentMetaSlugs,
  contentPaths,
  isContentMetaSegment,
  pathSegmentAfter,
  regionEditPath,
  regionNewPath,
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

export const isNavItemActive = (item: NavItem, pathname: string) => {
  if (item.url === contentPaths.regions) {
    return (
      pathname === item.url ||
      pathname.startsWith(`${item.url}/`) ||
      pathname === contentPaths.region ||
      pathname.startsWith(`${contentPaths.region}/`)
    );
  }

  return item.items.length > 0
    ? pathname === item.url || pathname.startsWith(`${item.url}/`)
    : pathname === item.url;
};

export const isNavSubItemActive = (url: string, pathname: string) => {
  if (pathname === url) return true;

  const metaRoots = [
    [contentPaths.regions, contentMetaSlugs.regions],
    [contentPaths.trekking, contentMetaSlugs.trekking],
    [contentPaths.activity, contentMetaSlugs.activity],
    [contentPaths.heliTours, contentMetaSlugs.heliTours],
  ] as const;

  for (const [root, slug] of metaRoots) {
    const metaUrl = contentMetaPath(root, slug);
    if (url === metaUrl) return false;
    if (url === root && pathname.startsWith(`${root}/`) && pathname !== metaUrl) {
      return true;
    }
  }

  if (
    url === contentPaths.regions &&
    (pathname === contentPaths.region ||
      pathname.startsWith(`${contentPaths.region}/`))
  ) {
    return true;
  }

  return false;
};

function regionDashboardBreadcrumbs(pathname: string): BreadcrumbCrumb[] {
  const crumbs: BreadcrumbCrumb[] = [
    { title: "Overview", href: "/dashboard" },
    { title: "Regions", href: contentPaths.regions },
  ];

  if (pathname === regionNewPath) {
    crumbs.push({ title: "Add region", href: regionNewPath });
    return crumbs;
  }

  if (pathname.startsWith(`${contentPaths.region}/edit/`)) {
    const slug = pathname.slice(`${contentPaths.region}/edit/`.length);
    const region = getRegionBySlug(slug);
    crumbs.push({
      title: region ? `Edit ${region.title}` : "Edit region",
      href: regionEditPath(slug),
    });
  }

  return crumbs;
}

export const getDashboardBreadcrumbs = (
  pathname: string,
): BreadcrumbCrumb[] => {
  if (
    pathname === contentPaths.region ||
    pathname.startsWith(`${contentPaths.region}/`)
  ) {
    return regionDashboardBreadcrumbs(pathname);
  }

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
    if (rest && !isContentMetaSegment(rest)) {
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

function contentAndMetaItems(
  root: string,
  contentTitle: string,
  metaSlug: string,
): NavSubItem[] {
  return [
    { title: contentTitle, url: root },
    { title: metaSlug, url: contentMetaPath(root, metaSlug) },
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
    items: contentAndMetaItems(
      contentPaths.regions,
      "Region",
      contentMetaSlugs.regions,
    ),
  },
  {
    title: "Trip",
    url: contentPaths.trekking,
    icon: TbMountain,
    group: "content",
    items: contentAndMetaItems(
      contentPaths.trekking,
      "Trip",
      contentMetaSlugs.trekking,
    ),
  },
  {
    title: "Heli Tour",
    url: contentPaths.heliTours,
    icon: TbHelicopter,
    group: "content",
    items: contentAndMetaItems(
      contentPaths.heliTours,
      "Heli Tour",
      contentMetaSlugs.heliTours,
    ),
  },
  {
    title: "Activity",
    url: contentPaths.activity,
    icon: TbParachute,
    group: "content",
    items: contentAndMetaItems(
      contentPaths.activity,
      "Activity",
      contentMetaSlugs.activity,
    ),
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
