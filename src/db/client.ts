import postgres, { type Sql } from "postgres";

import { getDatabaseUrl } from "@/db/env";

/**
 * CockroachDB is Postgres-wire compatible. Named prepared statements are
 * unreliable across nodes, so they stay off. The pool stays small so we
 * do not burn the cluster connection limit from Next.js / seed scripts.
 */
export function createSqlClient(url = getDatabaseUrl()): Sql {
  return postgres(url, {
    prepare: false,
    max: process.env.NODE_ENV === "production" ? 3 : 5,
    idle_timeout: 20,
    connect_timeout: 30,
    ssl: "require",
  });
}
