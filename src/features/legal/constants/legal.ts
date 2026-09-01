import { siteInfo } from "@/constant/site";

export interface LegalListItem {
  label?: string;
  text: string;
}

export interface LegalSection {
  heading?: string;
  paragraph?: string;
  items?: LegalListItem[];
  list?: string[];
}

export interface LegalPage {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}

export const termsContent: LegalPage = {
  title: "Terms & Conditions",
  effectiveDate: "August 21, 2026",
  intro: `${siteInfo.name} is a Nepal-based local trekking & travel agency registered under the laws of the Nepal Tourism Industry and accepts your bookings under the following terms and conditions. Please read these terms and conditions carefully before using our service.`,
  sections: [
    {
      heading: "Booking Terms",
      list: [
        `All bookings are made with ${siteInfo.name} (the "Company"), Registered Company Number ${siteInfo.companyRegNo}, whose office is in Lakeside, Pokhara, Nepal.`,
        `The term "trip" used on this website and in these booking conditions refers to all itineraries described on this website, including those which might otherwise be known as walking, tours, trekking trips, sightseeing, climbing, mountaineering, expeditions, or holidays.`,
        `We accept last-minute bookings as well, but full payment of the total tour cost should be made in advance if necessary, or can be paid fully on arrival.`,
        `On our holiday tour/trek packages, rooms or tents are provided on a twin-sharing basis. A single room supplement charge will be imposed on clients who do not have another tour participant to share a room/tent with.`,
        `The day-to-day itinerary is taken as a guideline only. We cannot be held responsible for delays caused by international or domestic flights, strikes, government regulations, weather, natural events, etc. In such cases, we will provide suitable alternatives to be agreed upon mutually; if not, the Company will only be responsible for a refund after deducting expenses already incurred.`,
        `If you do not show up at the meeting point on the agreed date, we will assume you have been delayed and will wait for you to contact us with a new expected arrival date. If you do not contact us within 48 hours, we will assume you have canceled the tour and no refund will be made.`,
        `Tours will not be canceled unless we are forced to do so by unusual or unforeseeable circumstances, such as a major natural disaster, political unrest, or war. If we cancel a tour, we will promptly refund all payments made to us, such as expenses related to hotel reservations or flight bookings. We are not liable to refund additional expenses you may have incurred, such as insurance, visas, vaccinations, and other incidental costs.`,
        `Trek information sheets and dossiers provide information and conditions relating to the tour and are deemed part of the contract, so you should be fully aware of their contents. The itinerary indicates what the group intends to accomplish, but is not a contractual obligation — changes may be made due to bad weather, flight cancellations, sickness, or other unforeseeable circumstances. No refunds are given for unused services.`,
        `We reserve the right to revise pricing posted on our website under certain circumstances or external pressures outside our control, such as changes in exchange rates, government taxes, or permit prices. We will make every effort to honor the presented rate, and in the case of a minor increase in flight fares, hotel rates, or other related factors, we will not revise the cost of a trip already confirmed and booked with a deposit.`,
        `A tour/trek guide representing the Company holds full authority during your trip. If you commit any unlawful act, you may be required to leave the tour, and no refund will be made in such a case.`,
        `Please understand that the comforts you may be accustomed to in Western countries may not be available in the Himalayan region. Weather is another factor that directly impacts your journey — patience, enthusiasm, and proper preparation before departure are essential.`,
        `You must purchase a comprehensive travel insurance package covering medical treatment, natural disasters, helicopter evacuation, and personal accidents. This is strongly recommended for all our clients.`,
        `You understand that during the trip, certain events may occur, including but not limited to accidents or illness in remote areas without medical facilities, political instability, and forces of nature. You agree to assume all risks associated with the journey to the maximum extent permitted by law.`,
        `You acknowledge that we work with a network of companies, government agencies, and individuals to help run our tours, treks, and expeditions. To the best of our knowledge, these third parties are qualified to perform their contracted duties. However, the Company is not liable for any injury, damage, loss, delay, or irregularity caused by the actions of these third parties.`,
        `The Company does not accept responsibility or liability for any traveler who contravenes the law or regulations of any destination visited.`,
        `It is essential that participants with pre-existing medical conditions disclose them to the Company at the time of booking. Medical and evacuation expenses are the responsibility of the participant. Please consult your doctor regarding vaccinations and other medical requirements before departure.`,
        `Bad weather in mountain regions can cause domestic flight delays, particularly in regions such as Everest, Jomsom, Jufal, Nepalgunj, Simikot, Kanchenjunga, and other remote areas of Nepal. In the event of a delayed domestic flight, the Company will cover departing-city accommodation costs where possible within that day's budget; otherwise, additional charges may apply. In such situations, the Company reserves the right to reroute treks or use road transport for extended delays, which may affect trip cost — any additional cost will be borne by the client.`,
        `The Company does not accept responsibility for costs incurred due to missed international flights, but will assist in making alternative arrangements where possible, at additional cost.`,
        `No refund will be made to clients who drop out of the journey, regardless of any unused portions of the itinerary. If the journey is terminated early at the client's request or due to other causes, the Company is not liable to refund the days not utilized. Clients are responsible for any hotel or other extra costs incurred after leaving the itinerary.`,
      ],
    },
    {
      heading: "Risk & Responsibility",
      paragraph:
        "Your safety and enjoyment are our top priority. We carry out our responsibilities honestly and sincerely to ensure your holiday is trouble-free and meets your expectations. Nevertheless, unless stated otherwise, trips may change due to uncertain and inherent circumstances such as landslides, road blockages, floods, snow, political unrest, flight cancellations, delayed arrivals, sickness, or accidents. Especially during the off-season, we highly recommend reserving extra days to allow for possible delays. Any extra cost incurred as a result is your personal responsibility and should be settled on the spot.",
    },
  ],
};

export const privacyContent: LegalPage = {
  title: "Privacy Policy",
  effectiveDate: "August 21, 2026",
  intro: `At ${siteInfo.name}, we are dedicated to safeguarding the privacy and security of both our website visitors and customers. This Privacy Policy details the categories of personal information we collect, how we use it, and the choices available to you regarding your data. By using our website, you agree to the terms outlined in this Privacy Policy.`,
  sections: [
    {
      heading: "Information We Collect",
      items: [
        {
          label: "Personal Information:",
          text: "We collect personal information (name, email, phone number, and billing address) that you voluntarily provide when using our website, making a booking, or subscribing to our newsletter.",
        },
        {
          label: "Payment Information:",
          text: "To ensure secure payment processing, we collect and process your payment information, including credit card details, in compliance with applicable laws and industry standards. Your payment information is not stored on our servers — we work with a trusted third-party payment gateway and are not responsible for data breaches on their end.",
        },
        {
          label: "Automatically Collected Information:",
          text: "When you visit our website, we may collect certain information such as your IP address, browser type, and device information. This is used to improve user experience and the website.",
        },
        {
          label: "Cookies:",
          text: "Our website uses cookies and similar tracking technologies to gather data about your interactions with the website. Cookies allow us to recognize you, personalize your experience, and remember your preferences. You can manage cookies through your browser settings or opt out of specific tracking technologies.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      items: [
        {
          label: "Provide Services:",
          text: "Your personal information is used for bookings, communications, and delivering requested services. We send you booking confirmations, itineraries, and travel updates.",
        },
        {
          label: "Personalization:",
          text: "Your information helps us personalize your website experience, tailoring recommendations and content relevant to your interests.",
        },
        {
          label: "Marketing Communications:",
          text: "We may send you promotional emails and newsletters about our travel services, special offers, and upcoming trips, but only with your consent. Subscribing to a newsletter or similar service is regarded as consent, and you may opt out of marketing communications at any time.",
        },
        {
          label: "Legal Obligations:",
          text: "Your information is kept with the utmost privacy. We are obliged to disclose customer information where required by law.",
        },
      ],
    },
    {
      heading: "Information Sharing and Disclosure",
      items: [
        {
          label: "Third-Party Service Providers:",
          text: "We may share your personal information with trusted third-party service providers who assist us in operating our website, processing payments, analyzing data, or delivering services on our behalf. These providers are contractually obligated to handle your information securely and are prohibited from using it for any other purpose.",
        },
        {
          label: "Legal Compliance:",
          text: "We are obliged to disclose your information to comply with applicable laws, regulations, legal processes, or enforceable government requests, or to protect our rights, privacy, safety, or property.",
        },
        {
          label: "Business Transfers:",
          text: "Should the Company undergo a merger, acquisition, or sale, customer information may be transferred. In such an event, customers will be notified by email or a prominent website notice if their information becomes subject to a different privacy policy.",
        },
      ],
    },
    {
      heading: "Data Security",
      paragraph:
        "We protect your personal information from unauthorized access, disclosure, alteration, or destruction through industry-standard security measures. However, we cannot guarantee absolute security, as no method of transmission or storage is 100% secure.",
    },
    {
      heading: "Your Rights and Choices",
      items: [
        {
          label: "Access and Update:",
          text: "You can access, update, or correct your personal information in our records. Please contact us for assistance.",
        },
        {
          label: "Opt-Out:",
          text: "To stop receiving marketing communications, follow the instructions included in the email or contact us directly. Please note that transactional emails will still be sent.",
        },
      ],
    },
  ],
};
