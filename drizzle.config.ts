import { defineConfig } from "drizzle-kit";

import { getDatabaseUrl, loadDbEnv } from "./src/db/env";

loadDbEnv();

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: getDatabaseUrl(),
  },
  strict: true,
  verbose: true,
});
