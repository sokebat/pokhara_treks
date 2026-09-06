import { config } from "dotenv";

/** Load `.env` then `.env.local` (local wins), matching Next.js. */
export function loadDbEnv() {
  config({ path: ".env" });
  config({ path: ".env.local", override: true });
}

export function getDatabaseUrl() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add your CockroachDB URL to .env or .env.local.",
    );
  }
  return url;
}
