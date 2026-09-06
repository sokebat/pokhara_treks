import { slugify } from "@/lib/utils";

const listingHrefs = new Set(["trip", "tours", "activity", "blogs", "faq"]);

export function contentGroupSlug(label: string, href?: string) {
  const last = href?.split("/").filter(Boolean).pop();
  if (last && !listingHrefs.has(last)) return last;
  return slugify(label);
}

export function contentLeafSlug(href: string) {
  return href.split("/").filter(Boolean).pop() ?? slugify(href);
}

export const contentPaths = {
  trekking: "/dashboard/trekking",
  regions: "/dashboard/regions",
  heliTours: "/dashboard/heli-tours",
  activity: "/dashboard/activity",
  tours: "/dashboard/tours",
  faq: "/dashboard/faq",
  blogs: "/dashboard/blogs",
} as const;

export const contentRoots = Object.values(contentPaths);

export function isContentPath(pathname: string) {
  return contentRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`),
  );
}

export function pathSegmentAfter(root: string, pathname: string) {
  if (pathname === root) return "";
  if (pathname.startsWith(`${root}/`)) return pathname.slice(root.length + 1);
  return null;
}
