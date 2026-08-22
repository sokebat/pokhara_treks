export interface FaqSection {
  heading?: string;
  paragraph?: string;
  list?: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  sections: FaqSection[];
}

export const faqCategories = [
  "Trip Preparation",
  "Booking & Payments",
  "Documents & Permits",
] as const;

export const faqItems: FaqItem[] = [
  {
    id: "equipment",
    category: "Trip Preparation",
    question: "What equipment and clothing shall I wear?",
    sections: [
      {
        paragraph:
          "Depending on the season you wish to go trekking, you may have to make adjustments to clothing and equipment; however, this is the necessary list we prepared to keep your comfort and utility in mind. We never recommend that our clients bring equipment that is not necessary for the trek.",
      },
      {
        heading: "Head",
        paragraph:
          "Sun hat or scarf, winter hat or insulating hat, or wide-brimmed hat, headlight with extra batteries.",
      },
      {
        heading: "Face",
        list: ["Sunscreen", "Sunglasses with UV protection", "Face/body wipes"],
      },
      {
        heading: "Hands",
        list: ["Lightweight gloves", "Heavyweight winter gloves"],
      },
      {
        heading: "Body",
        list: [
          "Hiking shirts, long-sleeved shirts made of synthetic fibre",
          "Hooded rain jacket",
          "Fleece jacket",
          "Lightweight cotton pants",
          "T-shirts (bring lightweight wool)",
          "Down jacket (available for rent in Kathmandu and Pokhara)",
          "Sweater, waterproof jacket, and pants",
        ],
      },
      {
        heading: "Footwear",
        list: [
          "Hiking boots that have been worn in, thick wool socks (take an extra pair of thick light socks)",
        ],
      },
      {
        heading: "Essential Gear",
        list: [
          "Backpack or daypack (size depends on whether you take a porter or not)",
          "Thermal bottle",
          "Water purification tablet/bottle",
          "Trekking pole",
          "Sleeping bag (-15 bag is best for the high altitude trek)",
          "Toiletries (toilet paper, toothpaste, toothbrush)",
          "Medium-size drying towel",
          "Toothbrush, toothpaste, deodorant/floss",
          "Biodegradable bar soap",
          "Nail clippers, small mirror",
          "Personal accessories",
          "Money",
          "Watch",
          "Cell phone",
          "Camera",
          "First aid kit",
          "Extra passport photos and photocopies of the passport",
          "Notebook and pen, binoculars",
        ],
      },
    ],
  },
  {
    id: "porter-guide-costs",
    category: "Booking & Payments",
    question:
      "What about the porter's and guide's food, accommodation, transportation and insurance?",
    sections: [
      {
        paragraph:
          "All the expenses of porters and guides are covered by the agency itself. So, the trekkers do not have to pay them individually. Instead, the visitors can show their goodwill by tipping them a certain amount of sum after the completion of the journey. Food, accommodation, transportation, and insurance for the porters and guides are included in the booked packages.",
      },
    ],
  },
  {
    id: "no-guide",
    category: "Trip Preparation",
    question: "Can I travel without a guide?",
    sections: [
      {
        paragraph:
          "Most of the death and lost cases of trekkers in the Himalayas have one thing in common which is they were travelling without a guide. Guides usually have comprehensive knowledge of all the available trails and have good contact with locals. Also, they are equipped with first-aid kits and medicines for commonly occurring diseases, in addition to that, they can contact the respective officials required during emergency cases. Moreover, the guides bear the responsibility of keeping their trekkers safe throughout the journey. It is mandatory to travel with a guide or in groups for safety purposes. Most importantly, we need someone to take care of us during the emergency accidents, altitude sickness, and injuries.",
      },
    ],
  },
  {
    id: "buy-gear-in-nepal",
    category: "Trip Preparation",
    question: "Can I buy trekking gear in Nepal?",
    sections: [
      {
        paragraph:
          "Yes, you can buy all the mandatory trekking gear in Nepal. Apart from that, some travel agencies may provide you with their own gear. It's not compulsory to buy the gear, instead, you can rent them and pay later. The shopkeeper will ask for a deposit in case the gears are lost or damaged. If the gears are fine, the deposit will be returned back to you.",
      },
    ],
  },
  {
    id: "safety-medical",
    category: "Trip Preparation",
    question: "Safety and medical information",
    sections: [
      {
        paragraph:
          "The foremost thing to do is to get travel insurance to cover our medical bills in case of an accident or injury. Apart from that, the travel guides are equipped with a first-aid kit and medicines for common diseases such as the common cold, headache, fever etc. We recommend every trekker wear warm clothes and drink plenty of warm water. Alcohol consumption should be strictly avoided.",
      },
    ],
  },
  {
    id: "booking-payment",
    category: "Booking & Payments",
    question: "What are the booking and payment methods for a trek?",
    sections: [
      {
        paragraph:
          "For the booking, the individual can book via the website or call on the contact details provided on the site. You can also send an email about your interest to the email address provided on the website. The individuals need to pay 20% of the total cost as an advance payment while booking. There are various ways of payment such as credit cards, Visa cards, MasterCard, Western Union, American Express, Maestro and via direct wire transfer to the bank. The bank will impose a 3.5% of paid amount as a banking charge. The most reliable way to pay the remaining amount is to pay directly to the agency before departure.",
      },
    ],
  },
  {
    id: "tipping",
    category: "Booking & Payments",
    question: "Tipping information",
    sections: [
      {
        paragraph:
          "Tipping is at the traveller's discretion, not a part of the guide's and porter's wage paid by the travel agency. In Nepalese culture, a tip is an honouring way to say thank you (Dhanyabad) for good service. Normally the tips are offered at the end of the trek, and this is best done as a group. Most groups will give tips at the farewell dinner on the last evening or day of the trek to mark the end of the trip. The tip amount is entirely a personal preference that may depend more or less on your perception of service quality, length of trip, budget, and appreciation of their work.",
      },
    ],
  },
  {
    id: "covid-protocols",
    category: "Documents & Permits",
    question: "What are the COVID protocols?",
    sections: [
      {
        paragraph:
          "The world was devastated by the coronavirus outbreak which halted trekking expeditions for a couple of years. But with the vaccine, the problem is solved and all the trekking routes welcome visitors nowadays. Foreigners need to have a vaccination card which is checked at Tribhuvan International Airport by the officials; other than that, they are free of any hassles relating to COVID protocols. Only some trekking regions may ask for the vaccination card and the PCR test is unnecessary in all regions of Nepal.",
      },
    ],
  },
  {
    id: "money-exchange",
    category: "Booking & Payments",
    question: "Money exchange",
    sections: [
      {
        paragraph:
          "Nepali Rupees (NPR/Rs) is the local currency. We can exchange most foreign currencies through local banks and legitimate money exchanges in Kathmandu. Small amounts of cash can also be exchanged at the hotel. The ongoing rate of exchange is visibly displayed on the internet and on a board outside of the exchange company. Nepal Rastra Bank updates the exchange rate on a daily basis. You can withdraw cash (in Rupees only) from one of the many ATMs available in many city areas. The maximum withdrawal amount is 35,000 Rupees for a 500 Rupees processing fee if you use your foreign card. If you use the money exchange facility at banks and financial institutions, the service fee charged is about four per cent or more, depending upon the bank. Please note that most of the established banks in Asia will not accept foreign currency notes that are old, torn or faded. Please ensure that you have new, clean notes.",
      },
    ],
  },
  {
    id: "passport-visa",
    category: "Documents & Permits",
    question: "What about passport and visa?",
    sections: [
      {
        paragraph:
          "All foreigners except Indian nationals must have a valid visa to enter Nepal. A visa is available upon arrival at Tribhuvan International Airport in Kathmandu, Nepal and at Nepal's borders with India and Tibet. The visa can be easily extended at the central immigration office. For the visa application, a passport with at least 6 months until expiration and a passport-size photo is mandatory. The current cost of the visa for 30 days is US$40 (to be paid in cash). Other currencies are also accepted, although rates may differ. Similarly, visitors are requested to specify return flight tickets and the time of their intended stay in Nepal, so we recommend you schedule at least 1-2 days extra at the end of the trip just in case of a delay — during that time we can arrange an additional activity if no delay occurs. Moreover, children under the age of 10 will get a free visa. Citizens of China, as well as citizens of South Asian Association for Regional Cooperation (SAARC) countries, get free visas. Some countries not entitled to get a visa on arrival are Nigeria, Ghana, Zimbabwe, Swaziland, Cameroon, Somalia, Liberia, Ethiopia, Iraq, Palestine, and Afghanistan. If you are a citizen of one of these countries, please contact your local Nepalese embassy.",
      },
    ],
  },
  {
    id: "permits-insurance",
    category: "Documents & Permits",
    question: "Do I need a special permit and travel insurance?",
    sections: [
      {
        paragraph:
          "The cost of the special permit required for trekking varies according to the region. The permit for the Manaslu region is US$100 per person for a week from September to November, with an additional US$10 per day for each person after a week; from December to August it costs US$75 per person for a week, with an additional US$10 per person after a week. In the Everest region, trekkers pay US$20 per person for the first four weeks, rising to US$25 per person beyond that. For the Annapurna Conservation Area, trekkers pay US$25 per person. In the Manang region, visitors pay US$100 per person for a week (US$15 per extra day) from September to November, dropping to US$75 for a week from December to August with an additional US$15 per day beyond a week. There are also restricted areas — Upper Mustang and Upper Dolpa — where outsiders pay US$500 per person for the first 10 days, and US$50 per person per day beyond that. Travel insurance is very important during trekking, as we are more likely to have accidents, injuries and other health-related hazards at higher altitudes. Travel insurance covers hospital fees, helicopter rescue fees, and other costs during an emergency, giving you peace of mind that your health and safety costs are covered.",
      },
    ],
  },
  {
    id: "trekking-with-children",
    category: "Trip Preparation",
    question: "How safe is trekking with children?",
    sections: [
      {
        paragraph:
          "Carrying children everywhere is a demanding job as they need extra care and attention. They are also more prone to illness and can't walk for as long, so treks can be slightly daunting but not impossible. With extra care and caution, most trekking routes in Nepal can easily be managed. The journey can also be impactful and educational for children thanks to their curious minds and knack for new environments. That said, higher altitude and longer treks are more difficult with children — this can be minimized with the help of an extra, dedicated guide.",
      },
    ],
  },
  {
    id: "age-limit",
    category: "Trip Preparation",
    question: "Is there any age limit for trekking?",
    sections: [
      {
        paragraph:
          "There is no age limit for trekking. With slightly more caution and care, children above 6 can complete most treks. For older trekkers, we recommend less physically demanding treks — some treks can also be modified, though this may take more days to complete. Higher altitude trekking can be more risky for older people and young children, as they are more prone to cold-related illness such as the common cold or fever, and the paths can be steep. Higher altitudes and longer treks are somewhat more difficult for certain age groups.",
      },
    ],
  },
];
