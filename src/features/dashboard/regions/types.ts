export type RegionFormValues = {
  title: string;
  shortLabel: string;
  tagline: string;
  slug: string;
  location: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  image: string;
  imageAlt: string;
  highestPoint: string;
  bestSeason: string;
  permits: string;
  typicalDuration: string;
  bodyHtml: string;
  highlightsHtml: string;
};

export const emptyRegionFormValues = (): RegionFormValues => ({
  title: "",
  shortLabel: "",
  tagline: "",
  slug: "",
  location: "",
  description: "",
  metaTitle: "",
  metaDescription: "",
  keywords: "",
  image: "",
  imageAlt: "",
  highestPoint: "",
  bestSeason: "",
  permits: "",
  typicalDuration: "",
  bodyHtml: "",
  highlightsHtml: "<ul><li></li></ul>",
});
