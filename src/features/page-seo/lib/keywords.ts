export function parseKeywords(raw: string) {
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function formatKeywords(keywords: string[]) {
  return keywords.join(", ");
}

export type PageSeoRecord = {
  path: string;
  title: string;
  description: string;
  keywords: string;
};
