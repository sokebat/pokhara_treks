import { slugify } from "@/lib/slug";

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
  trekking: "/dashboard/trip",
  regions: "/dashboard/regions",
  heliTours: "/dashboard/heli-tours",
  activity: "/dashboard/activity",
  tours: "/dashboard/tours",
  faq: "/dashboard/faq",
  blogs: "/dashboard/blogs",
} as const;

export const regionNewPath = `${contentPaths.regions}/new`;

export function regionEditPath(slug: string) {
  return `${contentPaths.regions}/edit/${slug}`;
}

export const contentMetaSlugs = {
  regions: "region-meta",
  trekking: "trip-meta",
  activity: "activity-meta",
  heliTours: "tours-meta",
} as const;

export function contentMetaPath(root: string, slug: string) {
  return `${root}/${slug}`;
}

export function isContentMetaSegment(segment: string) {
  return (Object.values(contentMetaSlugs) as string[]).includes(segment);
}

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
