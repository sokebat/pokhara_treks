import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "@/db/schema";

type Database = ReturnType<typeof drizzle<typeof schema>>;

let cached: Database | undefined;

// Connecting lazily (on first query, not on import) means routes that
// import this module but never touch the database — like NextAuth reading
// a JWT session cookie — still work without DATABASE_URL configured.
function getDb(): Database {
  if (!cached) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set. Add it to your .env.local file.");
    }
    const client = postgres(process.env.DATABASE_URL, { prepare: false });
    cached = drizzle(client, { schema });
  }
  return cached;
}

export const db = new Proxy({} as Database, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
