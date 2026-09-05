export type DestinationIconKey = "mountain" | "landmark" | "compass";

export interface DestinationLink {
  label: string;
  href: string;
}

export interface DestinationColumn {
  title: string;
  icon: DestinationIconKey;
  viewAllHref: string;
  links: DestinationLink[];
}

export interface FeaturedDestination {
  badge: string;
  title: string;
  description: string;
  href: string;
}

export const destinationColumns: DestinationColumn[] = [
  {
    title: "Trekking Regions",
    icon: "mountain",
    viewAllHref: "/trekking-and-hiking",
    links: [
      { label: "Everest Region", href: "/everest-trekking" },
      { label: "Annapurna Region", href: "/annapurna-trekking" },
      { label: "Manaslu Region", href: "/manaslu-trekking" },
      { label: "Langtang Region", href: "/langtang-trekking" },
      { label: "Kanchenjunga Region", href: "/kanchenjunga-region" },
    ],
  },
  {
    title: "Tours & Culture",
    icon: "landmark",
    viewAllHref: "/tours",
    links: [
      { label: "Pokhara Day Tour", href: "/pokhara-day-tour" },
      { label: "Kathmandu Day Tour", href: "/kathmandu-day-tour" },
      {
        label: "Chitwan National Park Safari",
        href: "/chitwan-national-park-safari",
      },
      { label: "Best of Nepal Tour", href: "/best-of-nepal-tour" },
      {
        label: "Birding Tour in Pokhara",
        href: "/birding-tour-in-pokhara-nepal",
      },
    ],
  },
  {
    title: "Adventure",
    icon: "compass",
    viewAllHref: "/activity",
    links: [
      { label: "Paragliding in Pokhara", href: "/activity#paragliding-in-pokhara" },
      { label: "Rafting in Nepal", href: "/activity#rafting" },
      { label: "Zipline in Pokhara", href: "/activity#zip-flyer-pokhara" },
      { label: "Bungee Jump Pokhara", href: "/activity#bungee-spots" },
      { label: "Cycling in Pokhara", href: "/activity#cycling" },
    ],
  },
];

export const featuredDestination: FeaturedDestination = {
  badge: "Most Popular",
  title: "Annapurna Base Camp Trek",
  description: "7 days into the heart of the Annapurna Sanctuary.",
  href: "/annapurna-base-camp-trek",
};
