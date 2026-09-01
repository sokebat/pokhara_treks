export type ReviewPlatform = "tripadvisor" | "google";

export type PlatformSummary = {
  platform: ReviewPlatform;
  label: string;
  rating: number;
  reviews: number;
  href: string;
};

export const platformSummaries: PlatformSummary[] = [
  {
    platform: "tripadvisor",
    label: "TripAdvisor",
    rating: 4.9,
    reviews: 128,
    href: "https://www.tripadvisor.com",
  },
  {
    platform: "google",
    label: "Google",
    rating: 4.8,
    reviews: 74,
    href: "https://www.google.com",
  },
];

export const reviewSummary = {
  average: 4.9,
  totalReviews: 202,
  breakdown: [
    { stars: 5, percent: 86 },
    { stars: 4, percent: 11 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
};

export type Testimonial = {
  name: string;
  context: string;
  rating: number;
  quote: string;
  trek: string;
  date: string;
  guide: string;
  platform: ReviewPlatform;
};

export const featuredTestimonial: Testimonial = {
  name: "Sanne V.",
  context: "Netherlands · Solo, first time in Nepal",
  rating: 5,
  quote:
    "I booked as a solo woman and was nervous about the teahouses. Having a female guide and a female porter changed the entire trip. I would not do it another way now.",
  trek: "Annapurna Base Camp Trek, 7 Days",
  date: "October 2025",
  guide: "Pushpa",
  platform: "tripadvisor",
};

export const testimonials: Testimonial[] = [
  {
    name: "Helen M.",
    context: "Australia · Solo, 54, first trek at altitude",
    rating: 5,
    quote:
      "I had never walked above 2,000 metres. My guide set a pace I could actually hold and never once made me feel like the slow one in the group.",
    trek: "Ghorepani Poon Hill, 4 Days",
    date: "March 2026",
    guide: "Samir",
    platform: "google",
  },
  {
    name: "Rachel T.",
    context: "United Kingdom · Two friends, first trek",
    rating: 5,
    quote:
      "The price they quoted was the price I paid. After three other quotes with permits and transport left off, that alone was worth booking direct for.",
    trek: "Mardi Himal, 5 Days",
    date: "November 2025",
    guide: "Samir",
    platform: "tripadvisor",
  },
  {
    name: "Priya K.",
    context: "India · Couple, three days in Pokhara",
    rating: 5,
    quote:
      "We walked in off the street with three days spare. By the next morning we were on the trail to Australian Camp with a guide who knew every family on the way.",
    trek: "Australian Camp, 2 Days",
    date: "December 2025",
    guide: "Hira",
    platform: "google",
  },
];
