import { drizzle } from "drizzle-orm/postgres-js";

import { createSqlClient } from "@/db/client";
import * as schema from "@/db/schema";

type Database = ReturnType<typeof drizzle<typeof schema>>;

let cached: Database | undefined;

function getDb(): Database {
  if (!cached) {
    cached = drizzle(createSqlClient(), { schema });
  }
  return cached;
}

export const db = new Proxy({} as Database, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
