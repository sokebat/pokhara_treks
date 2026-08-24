/**
 * Seeds admin users.
 *
 * Edit the `admins` array below to add, remove, or change admins, then
 * run `pnpm db:seed`. Safe to run more than once — it updates each
 * existing admin instead of failing on a duplicate email.
 */
import { config } from "dotenv";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { users } from "@/db/schema";

config({ path: ".env.local" });

type SeedAdmin = { name: string; email: string; password: string };

// The admin list lives in .env.local (gitignored) as JSON, not here —
// this file is committed to git, so real credentials can't live in it.
function loadAdmins(): SeedAdmin[] {
  const raw = process.env.SEED_ADMINS;
  if (!raw) {
    throw new Error(
      "SEED_ADMINS is not set. Add a JSON array to .env.local, e.g.\n" +
        `SEED_ADMINS='[{"name":"Admin One","email":"admin1@pokharatreks.com","password":"..."}]'`,
    );
  }
  return JSON.parse(raw) as SeedAdmin[];
}

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set. Add it to .env.local first.");
  }

  const admins = loadAdmins();

  const client = postgres(process.env.DATABASE_URL, { prepare: false });
  const db = drizzle(client);

  for (const admin of admins) {
    const passwordHash = await bcrypt.hash(admin.password, 12);

    await db
      .insert(users)
      .values({
        name: admin.name,
        email: admin.email.toLowerCase(),
        passwordHash,
      })
      .onConflictDoUpdate({
        target: users.email,
        set: { name: admin.name, passwordHash },
      });

    console.log(`Seeded admin user: ${admin.email}`);
  }

  await client.end();
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
