import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Compass,
  CreditCard,
  FileText,
  Flag,
  Footprints,
  HeartHandshake,
  Helicopter,
  MapPin,
  Mountain,
  MountainSnow,
  Route,
  ShieldCheck,
  Sunrise,
  Tent,
  UsersRound,
  Wallet,
} from "lucide-react";

// Reused across cards until each item has its own photo.
const TREK_PHOTO = "/images/collage-trekking.jpg";
const WOMEN_TREK_PHOTO = "/images/hero-women-trekking.jpg";
const HELI_PHOTO = "/images/collage-heli.jpg";

export type Activity = {
  title: string;
  count: string;
  href: string;
  icon: LucideIcon;
};

export const activities: Activity[] = [
  {
    title: "Trekking",
    count: "18 treks",
    href: "/trekking-and-hiking",
    icon: Mountain,
  },
  {
    title: "Short Treks & Day Hikes",
    count: "4 hikes",
    href: "/day-hike-in-nepal",
    icon: Footprints,
  },
  {
    title: "Peak Climbing",
    count: "8 peaks",
    href: "/peak-climbing",
    icon: MountainSnow,
  },
  {
    title: "Helicopter Tours",
    count: "5 tours",
    href: "/heli-tours",
    icon: Helicopter,
  },
  {
    title: "Adventure Activities",
    count: "6 activities",
    href: "/adventures",
    icon: Compass,
  },
  {
    title: "Tours",
    count: "5 tours",
    href: "/tours",
    icon: Camera,
  },
];

export type Trek = {
  title: string;
  days: string;
  href: string;
  rating: number;
  reviews: number;
  difficulty: string;
  altitude: string;
  season: string;
  price: number;
  icon: LucideIcon;
  image: string;
};

export const popularTreks: Trek[] = [
  {
    title: "Annapurna Base Camp Trek",
    days: "7 Days",
    href: "/annapurna-base-camp-trek",
    rating: 4.9,
    reviews: 86,
    difficulty: "Moderate",
    altitude: "4,130 m",
    season: "Mar to May, Sep to Nov",
    price: 475,
    icon: MountainSnow,
    image: TREK_PHOTO,
  },
  {
    title: "Mardi Himal Trek",
    days: "5 Days",
    href: "/mardi-himal-trek",
    rating: 4.9,
    reviews: 61,
    difficulty: "Moderate",
    altitude: "4,500 m",
    season: "Mar to May, Oct to Dec",
    price: 385,
    icon: Mountain,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Ghorepani Poon Hill Trek",
    days: "4 Days",
    href: "/poonhill-trek-from-pokhara",
    rating: 4.8,
    reviews: 94,
    difficulty: "Easy to Moderate",
    altitude: "3,210 m",
    season: "All year",
    price: 295,
    icon: Sunrise,
    image: TREK_PHOTO,
  },
  {
    title: "Khopra Danda Trek",
    days: "8 Days",
    href: "/khopra-trek-nepal",
    rating: 4.9,
    reviews: 52,
    difficulty: "Moderate",
    altitude: "4,660 m",
    season: "Mar to May, Sep to Nov",
    price: 550,
    icon: Tent,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Annapurna Circuit Trek",
    days: "13 Days",
    href: "/annapurna-circuit-trek",
    rating: 4.9,
    reviews: 77,
    difficulty: "Challenging",
    altitude: "5,416 m",
    season: "Mar to May, Sep to Nov",
    price: 850,
    icon: Route,
    image: TREK_PHOTO,
  },
  {
    title: "Upper Mustang Trek",
    days: "12 Days",
    href: "/upper-mustang-trek-nepal",
    rating: 4.8,
    reviews: 43,
    difficulty: "Moderate",
    altitude: "3,840 m",
    season: "Mar to Nov",
    price: 990,
    icon: Flag,
    image: WOMEN_TREK_PHOTO,
  },
];

export const shortTreks: Trek[] = [
  {
    title: "Ghorepani Poon Hill Trek",
    days: "4 Days",
    href: "/poonhill-trek-from-pokhara",
    rating: 4.8,
    reviews: 94,
    difficulty: "Easy to Moderate",
    altitude: "3,210 m",
    season: "All year",
    price: 295,
    icon: Sunrise,
    image: TREK_PHOTO,
  },
  {
    title: "Mardi Himal Trek",
    days: "5 Days",
    href: "/mardi-himal-trek",
    rating: 4.9,
    reviews: 61,
    difficulty: "Moderate",
    altitude: "4,500 m",
    season: "Mar to Dec",
    price: 385,
    icon: Mountain,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Australian Camp & Dhampus",
    days: "2 Days",
    href: "/australian-camp-day-hike",
    rating: 4.9,
    reviews: 31,
    difficulty: "Easy",
    altitude: "2,060 m",
    season: "All year",
    price: 145,
    icon: Footprints,
    image: TREK_PHOTO,
  },
  {
    title: "Sarangkot Sunrise & Paragliding",
    days: "1 Day",
    href: "/paragliding-in-pokhara-1",
    rating: 4.8,
    reviews: 58,
    difficulty: "Easy",
    altitude: "1,600 m",
    season: "All year",
    price: 120,
    icon: Compass,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Pokhara Peace Pagoda Hike",
    days: "Half Day",
    href: "/pokhara-peace-pagoda-hike",
    rating: 4.9,
    reviews: 40,
    difficulty: "Easy",
    altitude: "1,100 m",
    season: "All year",
    price: 65,
    icon: Flag,
    image: TREK_PHOTO,
  },
  {
    title: "Panchase Hill Day Hike",
    days: "1 Day",
    href: "/panchase-trek",
    rating: 4.8,
    reviews: 27,
    difficulty: "Moderate",
    altitude: "2,517 m",
    season: "Oct to May",
    price: 95,
    icon: Tent,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Begnas Lake Day Hike",
    days: "1 Day",
    href: "/begnas-lake-day-hike",
    rating: 4.7,
    reviews: 22,
    difficulty: "Easy",
    altitude: "1,000 m",
    season: "All year",
    price: 55,
    icon: MapPin,
    image: TREK_PHOTO,
  },
  {
    title: "Naudanda Ridge Day Hike",
    days: "1 Day",
    href: "/naudanda-day-hike",
    rating: 4.6,
    reviews: 18,
    difficulty: "Easy",
    altitude: "1,500 m",
    season: "All year",
    price: 60,
    icon: Camera,
    image: WOMEN_TREK_PHOTO,
  },
];

export type HeliTour = {
  title: string;
  href: string;
  flight: string;
  landsAt: string;
  departs: string;
  price: number;
  image: string;
};

export const heliTours: HeliTour[] = [
  {
    title: "Annapurna Base Camp Heli Tour",
    href: "/annapurna-base-camp-heli-landing-tour",
    flight: "1 hour",
    landsAt: "4,130 m",
    departs: "06:30",
    price: 450,
    image: HELI_PHOTO,
  },
  {
    title: "Mardi Himal Heli Tour",
    href: "/mardi-heli-tour",
    flight: "55 minutes",
    landsAt: "4,200 m",
    departs: "07:00",
    price: 420,
    image: HELI_PHOTO,
  },
  {
    title: "Kapuche Glacier Lake Heli Tour",
    href: "/kapuche-helicopter-tour",
    flight: "1 hr 10 min",
    landsAt: "2,546 m",
    departs: "07:30",
    price: 490,
    image: HELI_PHOTO,
  },
  {
    title: "Poon Hill & Ghandruk Heli Tour",
    href: "/poonhill-ghandruk-helicopter-tour",
    flight: "1 hour",
    landsAt: "3,210 m",
    departs: "06:45",
    price: 400,
    image: HELI_PHOTO,
  },
];

export type Guide = {
  name: string;
  role: string;
  licence: string;
  years: string;
  routes: string;
  languages: string;
  image: string;
};

export const guides: Guide[] = [
  {
    name: "Anita Gurung",
    role: "Founder & Lead Guide",
    licence: "NTB-00214",
    years: "14 years",
    routes: "Annapurna, Mustang",
    languages: "Nepali, English, Hindi",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Maya Tamang",
    role: "Senior Trekking Guide",
    licence: "NTB-00389",
    years: "9 years",
    routes: "Base Camp, Mardi Himal",
    languages: "Nepali, English",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Sunita Rai",
    role: "Guide & First-Aid Lead",
    licence: "NTB-00456",
    years: "6 years",
    routes: "Poon Hill, Khopra Danda",
    languages: "Nepali, English, Japanese",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Deepa Thapa",
    role: "Trekking Guide, Annapurna Circuit",
    licence: "NTB-00512",
    years: "5 years",
    routes: "Circuit, Tilicho, Manaslu",
    languages: "Nepali, English, German",
    image: WOMEN_TREK_PHOTO,
  },
];

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    title: "Based in Lakeside, not an agent",
    description:
      "Our office is a ten minute walk from your hotel and the trail starts at our door. Nobody in another country is reselling us.",
    icon: MapPin,
  },
  {
    title: "Women-led and women-staffed",
    description:
      "Owned by women, guided by women, and the office you email is run by the same people who walk with you.",
    icon: UsersRound,
  },
  {
    title: "Small groups and private departures",
    description:
      "Maximum eight walkers on a group departure. Private and family departures on any date you choose.",
    icon: Tent,
  },
  {
    title: "Licensed guides, insured, first-aid trained",
    description:
      "Every guide carries a government licence number, and we publish it on their profile page.",
    icon: ShieldCheck,
  },
  {
    title: "Every rupee stays with local women",
    description:
      "Wages, training and insurance go to women from these valleys and their families. Nothing leaves the district.",
    icon: Wallet,
  },
  {
    title: "Book direct and pay less",
    description:
      "The same trek booked through an overseas agent commonly costs 30 to 60 per cent more. Here, no one takes a cut.",
    icon: CreditCard,
  },
];

export const whyUsStats = [
  { value: "12", label: "Licensed women guides and porters" },
  { value: "30+", label: "Trips running from Pokhara" },
  { value: "8", label: "Maximum group size, always" },
  { value: "100%", label: "Locally owned and women-led" },
];

export type Departure = {
  trek: string;
  href: string;
  departs: string;
  returns: string;
  grade: string;
  seatsLeft: number;
  price: number;
};

export const departures: Departure[] = [
  {
    trek: "Annapurna Base Camp Trek",
    href: "/annapurna-base-camp-trek",
    departs: "12 Sep 2026",
    returns: "18 Sep 2026",
    grade: "Moderate",
    seatsLeft: 4,
    price: 475,
  },
  {
    trek: "Mardi Himal Trek",
    href: "/mardi-himal-trek",
    departs: "20 Sep 2026",
    returns: "24 Sep 2026",
    grade: "Moderate",
    seatsLeft: 6,
    price: 385,
  },
  {
    trek: "Ghorepani Poon Hill Trek",
    href: "/poonhill-trek-from-pokhara",
    departs: "3 Oct 2026",
    returns: "6 Oct 2026",
    grade: "Easy to Moderate",
    seatsLeft: 8,
    price: 295,
  },
  {
    trek: "Annapurna Circuit Trek",
    href: "/annapurna-circuit-trek",
    departs: "10 Oct 2026",
    returns: "22 Oct 2026",
    grade: "Challenging",
    seatsLeft: 3,
    price: 850,
  },
  {
    trek: "Upper Mustang Trek",
    href: "/upper-mustang-trek-nepal",
    departs: "15 Oct 2026",
    returns: "26 Oct 2026",
    grade: "Moderate",
    seatsLeft: 5,
    price: 990,
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
  icon: LucideIcon;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "What I wish I had known before my first trek alone",
    excerpt:
      "Teahouse etiquette, sleeping arrangements, periods on the trail, and the three things every solo woman asks us.",
    tag: "Solo Women",
    href: "/blog/first-trek-alone-what-i-wish-i-knew",
    icon: HeartHandshake,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "Poon Hill or Mardi Himal? An honest comparison",
    excerpt:
      "Two four to five day treks from Pokhara. One is busy and gentle, the other is quiet and steep. Which one suits you.",
    tag: "Route Guide",
    href: "/blog/poon-hill-or-mardi-himal",
    icon: Route,
    image: TREK_PHOTO,
  },
  {
    title: "What a trek in the Annapurna actually costs in 2026",
    excerpt:
      "Permits, guides, teahouses, tips and the things quotes leave out. With the real numbers, line by line.",
    tag: "Money",
    href: "/blog/annapurna-trek-cost-2026",
    icon: Wallet,
    image: WOMEN_TREK_PHOTO,
  },
  {
    title: "The permits you actually need for the Annapurna region",
    excerpt:
      "ACAP, TIMS, and the rules that keep changing. What you need, what we arrange for you, and what to bring.",
    tag: "Permits",
    href: "/blog/annapurna-permits-explained",
    icon: FileText,
    image: TREK_PHOTO,
  },
];
