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
      { label: "Paragliding in Pokhara", href: "/paragliding-in-pokhara-1" },
      { label: "Rafting in Nepal", href: "/rafting-in-nepal" },
      { label: "Zipline in Pokhara", href: "/zip-flyer-pokhara" },
      { label: "Bungee Jump Pokhara", href: "/bungee-jump-pokhara" },
      { label: "Cycling in Pokhara", href: "/cycling-in-pokhara" },
    ],
  },
];

export const featuredDestination: FeaturedDestination = {
  badge: "Most Popular",
  title: "Annapurna Base Camp Trek",
  description: "7 days into the heart of the Annapurna Sanctuary.",
  href: "/annapurna-base-camp-trek",
};
