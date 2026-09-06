const DEFAULT_AFTER_LOGIN = "/dashboard";

export function safeCallbackUrl(raw: string | null) {
  if (!raw) return DEFAULT_AFTER_LOGIN;

  if (raw.startsWith("/") && !raw.startsWith("//") && !raw.includes("\\")) {
    if (raw === "/login" || raw.startsWith("/login?")) {
      return DEFAULT_AFTER_LOGIN;
    }
    return raw;
  }

  try {
    const url = new URL(raw);
    if (typeof window !== "undefined" && url.origin !== window.location.origin) {
      return DEFAULT_AFTER_LOGIN;
    }
    if (!url.pathname.startsWith("/dashboard")) {
      return DEFAULT_AFTER_LOGIN;
    }
    return `${url.pathname}${url.search}`;
  } catch {
    return DEFAULT_AFTER_LOGIN;
  }
}
