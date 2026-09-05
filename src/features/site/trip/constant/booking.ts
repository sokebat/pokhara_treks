export const payCards = [
  {
    title: "To hold a place",
    body: "A 20 per cent deposit, USD 95 on this trek. Pay it by bank transfer to our company account with no fee, or by card through Stripe at 4 per cent. The balance is paid in Pokhara before you walk. We never ask for the full amount before you arrive.",
  },
  {
    title: "To change your date",
    body: "Free, up to 30 days before departure. Move to any date within 24 months, on this trek or any other trek we run. Inside 30 days, the deposit moves with you once.",
  },
  {
    title: "Insurance you must have",
    body: "Helicopter evacuation to 6,000 m and medical treatment abroad. Send us the policy number 7 days before you leave. A helicopter off this route costs USD 3,000 to 5,000.",
  },
];

export const cancelRows = [
  ["More than 30 days before", "100% of the deposit, or keep it as credit for 24 months"],
  ["15 to 30 days", "50% of the deposit"],
  ["Under 15 days", "The deposit is retained. You have not paid us anything else"],
] as const;
