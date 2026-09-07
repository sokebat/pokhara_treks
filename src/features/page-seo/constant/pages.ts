import {
  contentMetaPath,
  contentMetaSlugs,
  contentPaths,
} from "@/features/dashboard/lib/content-paths";

export const listingSeoPages = [
  {
    key: "regions",
    publicPath: "/region",
    dashboardPath: contentMetaPath(
      contentPaths.regions,
      contentMetaSlugs.regions,
    ),
    heading: "Region SEO",
    description:
      "Title, description and keywords for the public listing at /region.",
  },
  {
    key: "trip",
    publicPath: "/trip",
    dashboardPath: contentMetaPath(
      contentPaths.trekking,
      contentMetaSlugs.trekking,
    ),
    heading: "Trip SEO",
    description:
      "Title, description and keywords for the public listing at /trip.",
  },
  {
    key: "activity",
    publicPath: "/activity",
    dashboardPath: contentMetaPath(
      contentPaths.activity,
      contentMetaSlugs.activity,
    ),
    heading: "Activity SEO",
    description:
      "Title, description and keywords for the public listing at /activity.",
  },
  {
    key: "tours",
    publicPath: "/tours",
    dashboardPath: contentMetaPath(
      contentPaths.heliTours,
      contentMetaSlugs.heliTours,
    ),
    heading: "Tours SEO",
    description:
      "Title, description and keywords for the public listing at /tours.",
  },
] as const;

export type ListingSeoPage = (typeof listingSeoPages)[number];
export type ListingSeoKey = ListingSeoPage["key"];
export type ListingPublicPath = ListingSeoPage["publicPath"];

export const listingSeoPagesByKey = Object.fromEntries(
  listingSeoPages.map((page) => [page.key, page]),
) as Record<ListingSeoKey, ListingSeoPage>;

export function isListingSeoKey(key: string): key is ListingSeoKey {
  return Object.hasOwn(listingSeoPagesByKey, key);
}

export function getListingSeoPage(key: ListingSeoKey): ListingSeoPage {
  return listingSeoPagesByKey[key];
}
