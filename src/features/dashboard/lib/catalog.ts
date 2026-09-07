import { adventureActivities } from "@/features/site/activity/constant/activities";
import { adventureCategories } from "@/features/site/activity/constant/categories";
import { blogPosts } from "@/features/site/blogs/constant/blog-posts";
import { faqCategories, faqItems } from "@/features/site/faq/constant/faq";
import { heliTours } from "@/features/site/heli-tours/constant/heli-tours";
import type { TripListingItem } from "@/features/site/listing/types";
import { tourSections } from "@/features/site/tours/constant/tours";
import { trekkingSections } from "@/features/site/trekking/constant/trekking";
import { slugify } from "@/lib/slug";

import {
  contentLeafSlug,
  contentPaths,
  pathSegmentAfter,
} from "@/features/dashboard/lib/content-paths";

export type CatalogRow = {
  title: string;
  href: string;
  group?: string;
  location?: string;
  meta?: string;
  price?: number;
  date?: string;
  description?: string;
};

export type CatalogListPage = {
  kind: "list";
  title: string;
  description: string;
  groupLabel?: string;
  metaLabel?: string;
  rows: CatalogRow[];
};

export type CatalogDetailPage = {
  kind: "detail";
  title: string;
  description: string;
  href: string;
  cardTitle?: string;
  fields: { label: string; value: string }[];
};

export type CatalogPage = CatalogListPage | CatalogDetailPage;

function listingRows(
  items: TripListingItem[],
  group: string,
): CatalogRow[] {
  return items.map((item) => ({
    title: item.title,
    href: item.href,
    group,
    location: item.location,
    meta: item.duration,
    price: item.price,
  }));
}

function countLabel(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function trekkingCatalog(rest: string): CatalogPage | null {
  if (rest === "") {
    const rows = trekkingSections.flatMap((section) =>
      listingRows(section.items, section.label),
    );

    return {
      kind: "list",
      title: "Trekking",
      description: `${countLabel(rows.length, "trek")} across ${countLabel(trekkingSections.length, "region")}.`,
      groupLabel: "Region",
      metaLabel: "Duration",
      rows,
    };
  }

  const section = trekkingSections.find((item) => item.slug === rest);
  if (!section) return null;

  return {
    kind: "list",
    title: section.label,
    description: section.description,
    groupLabel: "Region",
    metaLabel: "Duration",
    rows: listingRows(section.items, section.label),
  };
}

function heliCatalog(rest: string): CatalogPage | null {
  if (rest === "") {
    return {
      kind: "list",
      title: "Heli Tour",
      description: `${countLabel(heliTours.length, "helicopter tour")} from Pokhara and Kathmandu.`,
      groupLabel: "Type",
      metaLabel: "Flight",
      rows: heliTours.map((tour) => ({
        title: tour.title,
        href: tour.href,
        group: "Heli Tour",
        location: tour.location,
        meta: tour.flight,
        price: tour.price,
        description: tour.excerpt,
      })),
    };
  }

  const tour = heliTours.find((item) => contentLeafSlug(item.href) === rest);
  if (!tour) return null;

  return {
    kind: "detail",
    title: tour.title,
    description: tour.excerpt,
    href: tour.href,
    fields: [
      { label: "Location", value: tour.location },
      { label: "Flight", value: tour.flight },
      { label: "Lands at", value: tour.landsAt },
      { label: "Departs", value: tour.departs },
      { label: "Price", value: `USD ${tour.price}` },
    ],
  };
}

function activityCatalog(rest: string): CatalogPage | null {
  if (rest === "") {
    return {
      kind: "list",
      title: "Activity",
      description: `${countLabel(adventureActivities.length, "activity", "activities")} from Lakeside — bungee, paragliding, rafting, and more.`,
      groupLabel: "Category",
      metaLabel: "Duration",
      rows: adventureActivities.map((activity) => ({
        title: activity.title,
        href: activity.href,
        group:
          adventureCategories.find((item) => item.slug === activity.category)
            ?.label ?? activity.category,
        location: activity.location,
        meta: activity.duration,
        price: activity.price,
      })),
    };
  }

  const category = adventureCategories.find((item) => item.slug === rest);
  if (!category) return null;

  const items = adventureActivities.filter(
    (activity) => activity.category === category.slug,
  );

  return {
    kind: "list",
    title: category.label,
    description: category.description,
    groupLabel: "Category",
    metaLabel: "Duration",
    rows: items.map((activity) => ({
      title: activity.title,
      href: activity.href,
      group: category.label,
      location: activity.location,
      meta: activity.duration,
      price: activity.price,
    })),
  };
}

function toursCatalog(rest: string): CatalogPage | null {
  if (rest === "") {
    const rows = tourSections.flatMap((section) =>
      listingRows(section.items, section.label),
    );

    return {
      kind: "list",
      title: "Tours",
      description: `${countLabel(rows.length, "tour")} — day hikes, city days, multi-day circuits, and wildlife.`,
      groupLabel: "Category",
      metaLabel: "Duration",
      rows,
    };
  }

  const section = tourSections.find((item) => item.slug === rest);
  if (!section) return null;

  return {
    kind: "list",
    title: section.label,
    description: section.description,
    groupLabel: "Category",
    metaLabel: "Duration",
    rows: listingRows(section.items, section.label),
  };
}

function faqCatalog(rest: string): CatalogPage | null {
  const items =
    rest === ""
      ? faqItems
      : faqItems.filter((item) => slugify(item.category) === rest);

  if (rest !== "" && items.length === 0) return null;

  const category =
    rest === ""
      ? undefined
      : faqCategories.find((item) => slugify(item) === rest);

  return {
    kind: "list",
    title: category ?? "FAQ",
    description:
      rest === ""
        ? `${countLabel(faqItems.length, "question")} grouped by trip prep, booking, and permits.`
        : `Questions about ${category?.toLowerCase() ?? "this topic"}.`,
    groupLabel: "Category",
    rows: items.map((item) => ({
      title: item.question,
      href: `/faq#${slugify(item.category)}`,
      group: item.category,
    })),
  };
}

function blogsCatalog(rest: string): CatalogPage | null {
  if (rest !== "") return null;

  return {
    kind: "list",
    title: "Blogs",
    description: `${countLabel(blogPosts.length, "article")} from the trail — routes, costs, permits, and how we travel.`,
    groupLabel: "Tag",
    metaLabel: "Read time",
    rows: blogPosts.map((post) => ({
      title: post.title,
      href: post.href,
      group: post.tag,
      meta: post.readTime,
      date: post.date,
      description: post.excerpt,
    })),
  };
}

export function getCatalog(pathname: string): CatalogPage | null {
  const trekkingRest = pathSegmentAfter(contentPaths.trekking, pathname);
  if (trekkingRest !== null) return trekkingCatalog(trekkingRest);

  const heliRest = pathSegmentAfter(contentPaths.heliTours, pathname);
  if (heliRest !== null) return heliCatalog(heliRest);

  const activityRest = pathSegmentAfter(contentPaths.activity, pathname);
  if (activityRest !== null) return activityCatalog(activityRest);

  const toursRest = pathSegmentAfter(contentPaths.tours, pathname);
  if (toursRest !== null) return toursCatalog(toursRest);

  const faqRest = pathSegmentAfter(contentPaths.faq, pathname);
  if (faqRest !== null) return faqCatalog(faqRest);

  const blogsRest = pathSegmentAfter(contentPaths.blogs, pathname);
  if (blogsRest !== null) return blogsCatalog(blogsRest);

  return null;
}
