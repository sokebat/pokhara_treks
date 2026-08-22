export interface NavLeaf {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children: NavLeaf[];
}

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "simple";
      label: string;
      href: string;
      children: NavLeaf[];
    }
  | {
      type: "mega";
      label: string;
      href: string;
      groups: NavGroup[];
    };

export const navItems: NavItem[] = [
  {
    type: "mega",
    label: "Trekking",
    href: "/trekking-and-hiking",
    groups: [
      {
        label: "Everest Region",
        href: "/everest-trekking",
        children: [
          { label: "Everest Base Camp Trek (12 Days)", href: "/everest-base-camp-trek" },
          { label: "Everest Three Passes Trek - 17 Days", href: "/everest-high-passes-trek" },
          { label: "Gokyo Lake Trek - 11 Days", href: "/gokyo-lake-trek" },
          { label: "Pikey Peak Trek - 5 Days", href: "/pikey-peak-trek" },
              { label: "Khopra Ridge Trek - 7 Days", href: "/khopra-trek-nepal" },
          { label: "Ghorepani Poonhill Trek From Pokhara", href: "/poonhill-trek-from-pokhara" },
          { label: "Annapurna Circuit Trek with Tilicho Lake - 11 Days", href: "/tilicho-lake-trek" },
          { label: "Mohare Danda Trek - 4 Days", href: "/mohare-danda-trek" },
          { label: "Nar Phu Trek - 10 Days", href: "/nar-phu-valley-trek" },
          { label: "Panchase Trek", href: "/panchase-trek" },
          { label: "Ghandruk Village Trek: 6 Days", href: "/ghandruk-village-trek" },
          { label: "Kapuche Glacier Lake Trek", href: "/kapuche-lake-trek" },
          { label: "Kori Himal Trek - 6 Days", href: "/kori-himal-trek" },
          { label: "Khumai Korcha Trek - 4 Days", href: "/korcha-trek" },
          { label: "Sikles Village Trek", href: "/sikles-village-trek" },
          { label: "Royal Trek Nepal", href: "/royal-trek-nepal" },
          { label: "Four Peaks Trek", href: "/four-peaks-trek-annapurna-region" },
          { label: "Upper Mustang Jeep Tour (11 Days)", href: "/upper-mustang-jeep-tour" },
          { label: "Lower Mustang Trek", href: "/lower-mustang-trek-nepal" },
          { label: "Hidden Lake Trek", href: "/hidden-lake-trek-nepal" },
          { label: "Kajin Sara Trek", href: "/kajin-sara-trek" },
          { label: "Annapurna Base Camp Trekking - 6 Days", href: "/base-camp-annapurna-cost" },
          { label: "Namun La Pass Trek - 9 Days", href: "/namunla-trek" },
          { label: "Short Annapurna Base Camp Trek - 5 Days", href: "/short-annapurna-base-camp-trek" },
          { label: "Teri La Pass Trek - 20 Days", href: "/teri-la-pass-trek" },
        ],
      },
      {
        label: "Annapurna Region",
        href: "/annapurna-trekking",
        children: [
          { label: "Upper Mustang Trek - 14 Days", href: "/upper-mustang-trek-nepal" },
          { label: "Annapurna Base Camp Trek (7 Days)", href: "/annapurna-base-camp-trek" },
          { label: "Annapurna Circuit Trek (12 Days)", href: "/annapurna-circuit-trek" },
          { label: "Mardi Himal Trek – 7 Days", href: "/mardi-himal-trek" },
          { label: "North Annapurna Base Camp Trek - 5 Days", href: "/annapurna-north-base-camp-trek" },
          { label: "Annapurna Sanctuary Trek - 9 Days", href: "/annapurna-sanctuary-trek" },
          { label: "Khopra Ridge Trek - 7 Days", href: "/khopra-trek-nepal" },
          { label: "Ghorepani Poonhill Trek From Pokhara", href: "/poonhill-trek-from-pokhara" },
          { label: "Annapurna Circuit Trek with Tilicho Lake - 11 Days", href: "/tilicho-lake-trek" },
          { label: "Mohare Danda Trek - 4 Days", href: "/mohare-danda-trek" },
          { label: "Nar Phu Trek - 10 Days", href: "/nar-phu-valley-trek" },
          { label: "Panchase Trek", href: "/panchase-trek" },
          { label: "Ghandruk Village Trek: 6 Days", href: "/ghandruk-village-trek" },
          { label: "Kapuche Glacier Lake Trek", href: "/kapuche-lake-trek" },
          { label: "Kori Himal Trek - 6 Days", href: "/kori-himal-trek" },
          { label: "Khumai Korcha Trek - 4 Days", href: "/korcha-trek" },
          { label: "Sikles Village Trek", href: "/sikles-village-trek" },
          { label: "Royal Trek Nepal", href: "/royal-trek-nepal" },
          { label: "Four Peaks Trek", href: "/four-peaks-trek-annapurna-region" },
          { label: "Upper Mustang Jeep Tour (11 Days)", href: "/upper-mustang-jeep-tour" },
          { label: "Lower Mustang Trek", href: "/lower-mustang-trek-nepal" },
          { label: "Hidden Lake Trek", href: "/hidden-lake-trek-nepal" },
          { label: "Kajin Sara Trek", href: "/kajin-sara-trek" },
          { label: "Annapurna Base Camp Trekking - 6 Days", href: "/base-camp-annapurna-cost" },
          { label: "Namun La Pass Trek - 9 Days", href: "/namunla-trek" },
          { label: "Short Annapurna Base Camp Trek - 5 Days", href: "/short-annapurna-base-camp-trek" },
          { label: "Teri La Pass Trek - 20 Days", href: "/teri-la-pass-trek" },
          { label: "Annapurna Base Camp Trek - 13 Days", href: "/annapurna-base-camp-trek-13-days" },
          { label: "Three Peak Trek", href: "/three-peaks-trek" },
          { label: "Upper Mustang Tiji Festival Tour – 12 Days", href: "/tiji-festival-tour" },
        ],
      },
      {
        label: "Manaslu Region",
        href: "/manaslu-trekking",
        children: [
          { label: "8 Days Tsum Valley Trek", href: "/tsum-valley-trek" },
          { label: "Manaslu Circuit with Tsum Valley Trek - 18 Days", href: "/manaslu-with-tsum-valley-trek" },
          { label: "Manaslu Circuit Trek 2026", href: "/manaslu-circuit-trek" },
          { label: "Bhimtang Trek (9 Days)", href: "/bhimtang-trek" },
          { label: "Manaslu Circuit Trekking Nepal - 11 Days", href: "/manaslu-circuit-trekking" },
        ],
      },
      {
        label: "West Nepal",
        href: "/west-nepal-trekking",
        children: [
          { label: "Dhorpatan Trek with Gurja Khani", href: "/dhorpatan-trek-with-gurjakhani" },
          { label: "Jumla Rara Lake Trek", href: "/rara-lake-trek" },
          { label: "Lower Dolpo Circuit Trek", href: "/lower-dolpa-trek-nepal" },
          { label: "Upper Dolpo Trek", href: "/upper-dolpo-trek" },
        ],
      },
      {
        label: "Langtang Region",
        href: "/langtang-trekking",
        children: [
          { label: "Gosaikunda Lake Trek", href: "/gosaikunda-trek-nepal" },
          { label: "Helambu Trek", href: "/helambu-trek" },
          { label: "Langtang Valley Trek - 5 Days", href: "/langtang-valley-trek" },
          { label: "Tamang Heritage Trail Trek", href: "/tamang-heritage-trek" },
          { label: "Langtang Trek: Cost, Itinerary & Route Map", href: "/langtang-trek-cost-itinerary-route-map" },
        ],
      },
      {
        label: "Dhaulagiri Region",
        href: "/dhaulagiri-trek",
        children: [{ label: "Dhaulagiri Circuit Trek - 16 Days", href: "/dhaulagiri-circuit-trek" }],
      },
      {
        label: "Tibet Region",
        href: "/tibet-region",
        children: [
          { label: "Kailash Mansarovar Yatra - 11 Days", href: "/tibet-kailash-mansarovar-tour" },
          { label: "Bhutan 4 Night 5 Days Tour", href: "/bhutan-4-night-5-days-tour" },
          { label: "6 Night 7 Days Bhutan Tour", href: "/bhutan-tour-6-night-7-days" },
          { label: "Bhutan Tours and Trekking - 8 Days", href: "/bhutan-tours-and-trekking-8-days-itinerary" },
          { label: "Kailash Mansarovar with EBC Tour", href: "/kailash-mansarovar-everest-base-camp-tour" },
        ],
      },
      {
        label: "Kanchenjunga Region",
        href: "/kanchenjunga-region",
        children: [
          { label: "Kanchenjunga Circuit Trek - 17 Days", href: "/kanchenjunga-circuit-trek" },
        ],
      },
    ],
  },
  {
    type: "simple",
    label: "Peak Climbing",
    href: "/peak-climbing",
    children: [
      { label: "Mera Peak Climb", href: "/mera-peak-expedition" },
      { label: "Island Peak Climbing", href: "/island-peak-expedition" },
      { label: "Lobuche Peak Climbing", href: "/lobuche-peak-climbing" },
      { label: "Mardi Himal Peak Climbing", href: "/mardi-himal-peak-climbing-a-close-up-view-of-machhapuchhre" },
      { label: "Yala Peak Climbing", href: "/yala-peak-climbing-a-perfect-climbing-peak-for-beginners" },
      { label: "Chulu Far East Peak Climbing", href: "/chulu-far-east-peak-climbing" },
    ],
  },
  {
    type: "simple",
    label: "Heli Tour",
    href: "/heli-tours",
    children: [
      { label: "North Annapurna Base Camp Heli Landing Tour", href: "/heli-tour-north-annapurna-base-camp" },
      { label: "Mardi Himal Helicopter Tour", href: "/mardi-heli-tour" },
      { label: "Annapurna Base Camp Helicopter Tour", href: "/annapurna-base-camp-heli-landing-tour" },
      { label: "Kapuche Helicopter Landing Tour", href: "/kapuche-helicopter-tour" },
      { label: "Kori Himal Helicopter Landing Tour", href: "/kori-helicopter-tour" },
      { label: "Rescue Flight & Medical Evacuation", href: "/rescue-flight-medical-evacuation-and-other-services" },
      { label: "Everest Helicopter Tour", href: "/everest-helicopter-tour" },
      { label: "Muktinath Helicopter Tour from Pokhara", href: "/muktinath-helicopter-tour" },
      { label: "PoonHill-Ghandruk Helicopter Landing Tour", href: "/poonhill-ghandruk-helicopter-tour" },
    ],
  },
  {
    type: "mega",
    label: "Adventure",
    href: "/adventures",
    groups: [
      {
        label: "Bungee Spots",
        href: "/bungee-spots",
        children: [
          { label: "Kushma Bungee Jump", href: "/kushma-bungge-jump-1" },
          { label: "Bungee Jump Pokhara", href: "/bungee-jump-pokhara" },
        ],
      },
      {
        label: "Ultralight Flying in Pokhara",
        href: "/ultralight-flying-in-pokhara",
        children: [{ label: "Ultralight Flight Price (15-90 Min)", href: "/ultralight-in-pokhara" }],
      },
      {
        label: "Paragliding in Pokhara",
        href: "/paragliding-in-pokhara",
        children: [{ label: "Paragliding in Pokhara", href: "/paragliding-in-pokhara-1" }],
      },
      {
        label: "Zip Flyer - Pokhara",
        href: "/zip-flyer-pokhara-1",
        children: [{ label: "Zipline in Pokhara", href: "/zip-flyer-pokhara" }],
      },
      {
        label: "Rafting",
        href: "/rafting-in-pokhara",
        children: [
          { label: "Rafting in Nepal", href: "/rafting-in-nepal" },
          { label: "Trishuli River Rafting", href: "/trishuli-river-rafting" },
          { label: "Upper Seti River Rafting", href: "/upper-seti-river-rafting" },
          { label: "Kali Gandaki River Rafting", href: "/kali-gandaki-river-rafting" },
          { label: "Lower Seti River Rafting", href: "/lower-seti-river-rafting" },
          { label: "Marsyangdi River Rafting", href: "/marsyangdi-river-rafting" },
        ],
      },
      {
        label: "Cycling",
        href: "/pokhara-cycling",
        children: [
          { label: "Cycling in Pokhara", href: "/cycling-in-pokhara" },
          { label: "Upper Mustang Mountain Biking Tour", href: "/uppermustang-biking-mtb-tour" },
          { label: "Annapurna Circuit Mountain Bike Tour", href: "/annapurna-bike-tour" },
        ],
      },
      {
        label: "Canyoning",
        href: "/canyoning",
        children: [
          { label: "Pokhara Canyoning in Lwang Village", href: "/canyoning-in-pokhara" },
          { label: "Canyoning in Jalbire Jharana", href: "/canyoning-in-jalbire" },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Tours",
    href: "/tours",
    groups: [
      {
        label: "Day Hike in Nepal",
        href: "/day-hike-in-nepal",
        children: [
          { label: "Australian Camp Day Hike", href: "/australian-camp-day-hike" },
          { label: "Pokhara Peace Pagoda Hike", href: "/pokhara-peace-pagoda-hike" },
          { label: "Sarangkot - Australian Camp to Dhampus Hike", href: "/sarangkot-australian-camp-to-dhampus-hike" },
          { label: "Kalikasthan Day Hike", href: "/kalikasthan-day-hike" },
        ],
      },
      {
        label: "Day Tour",
        href: "/day-tour",
        children: [
          { label: "Sarangkot Sunrise Tour", href: "/sarangkot-sunrise-hike" },
          { label: "Kathmandu Day Tour", href: "/kathmandu-day-tour" },
          { label: "Nagarkot Sunrise Tour", href: "/nagarkot-sunrise-tour" },
          { label: "Pokhara Lake Tour", href: "/pokhara-lake-tour" },
          { label: "Pokhara City Tour", href: "/pokhara-city-tour" },
          { label: "Pokhara Day Tour", href: "/pokhara-day-tour" },
        ],
      },
      {
        label: "Multi Days Tour",
        href: "/multi-days-tour",
        children: [
          { label: "Lumbini Day Tour", href: "/lumbini-day-tour" },
          { label: "Best of Nepal Tour", href: "/best-of-nepal-tour" },
          { label: "Kathmandu, Pokhara & Chitwan Tour", href: "/kathmandu-pokhara-chitwan-tour" },
        ],
      },
      {
        label: "Birding Tour Nepal",
        href: "/bird-tour-nepal",
        children: [{ label: "Birding Tour in Pokhara", href: "/birding-tour-in-pokhara-nepal" }],
      },
      {
        label: "Nature & Wildlife",
        children: [
          { label: "Bardia National Park Safari", href: "/bardiya-national-park-safari" },
          { label: "Chitwan National Park Safari", href: "/chitwan-national-park-safari" },
        ],
      },
    ],
  },
  {
    type: "simple",
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Nepal", href: "/nepal-tour-package" },
      { label: "Tibet", href: "/tibet-tour-package-from-nepal" },
      { label: "Bhutan", href: "/bhutan-tour-package" },
    ],
  },
  {
    type: "link",
    label: "Blogs",
    href: "/blog",
  },
];
