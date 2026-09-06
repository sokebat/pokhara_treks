const MAX_KEYWORDS = 20;
const MAX_KEYWORD_LENGTH = 40;

export function parseKeywords(raw: string) {
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function formatKeywords(keywords: string[]) {
  return keywords.join(", ");
}

export function normalizeKeywords(raw: string) {
  return formatKeywords(
    parseKeywords(raw)
      .slice(0, MAX_KEYWORDS)
      .map((keyword) => keyword.slice(0, MAX_KEYWORD_LENGTH)),
  );
}
