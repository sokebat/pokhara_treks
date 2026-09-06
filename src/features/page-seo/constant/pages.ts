import {
  contentMetaPath,
  contentMetaSlugs,
  contentPaths,
} from "@/features/dashboard/lib/content-paths";

export const listingSeoPages = [
  {
    key: "regions",
    publicPath: "/region",
    dashboardPath: contentMetaPath(contentPaths.regions, contentMetaSlugs.regions),
    heading: contentMetaSlugs.regions,
    description:
      "Title, description and keywords for the public listing at /region.",
  },
  {
    key: "trip",
    publicPath: "/trip",
    dashboardPath: contentMetaPath(contentPaths.trekking, contentMetaSlugs.trekking),
    heading: contentMetaSlugs.trekking,
    description:
      "Title, description and keywords for the public listing at /trip.",
  },
  {
    key: "activity",
    publicPath: "/activity",
    dashboardPath: contentMetaPath(contentPaths.activity, contentMetaSlugs.activity),
    heading: contentMetaSlugs.activity,
    description:
      "Title, description and keywords for the public listing at /activity.",
  },
  {
    key: "tours",
    publicPath: "/tours",
    dashboardPath: contentMetaPath(contentPaths.heliTours, contentMetaSlugs.heliTours),
    heading: contentMetaSlugs.heliTours,
    description:
      "Title, description and keywords for the public listing at /tours.",
  },
] as const;

export type ListingSeoKey = (typeof listingSeoPages)[number]["key"];
export type ListingSeoPage = (typeof listingSeoPages)[number];

export function getListingSeoPage(key: string) {
  return listingSeoPages.find((page) => page.key === key);
}

export function isListingSeoKey(key: string): key is ListingSeoKey {
  return listingSeoPages.some((page) => page.key === key);
}
