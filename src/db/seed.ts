/**
 * Seeds admin users from SEED_ADMINS in .env / .env.local.
 * Safe to re-run — existing emails are updated, not duplicated.
 */
import bcrypt from "bcryptjs";
import { drizzle } from "drizzle-orm/postgres-js";
import { z } from "zod";

import { createSqlClient } from "@/db/client";
import { loadDbEnv } from "@/db/env";
import { users } from "@/db/schema";

loadDbEnv();

const seedAdminSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
});

function loadAdmins() {
  const raw = process.env.SEED_ADMINS;
  if (!raw) {
    throw new Error(
      "SEED_ADMINS is not set. Add a JSON array to .env, e.g.\n" +
        `SEED_ADMINS='[{"name":"Admin","email":"admin@pokharatreks.com","password":"..."}]'`,
    );
  }

  const parsed = z.array(seedAdminSchema).min(1).safeParse(JSON.parse(raw));
  if (!parsed.success) {
    throw new Error(`SEED_ADMINS is invalid: ${parsed.error.message}`);
  }

  return parsed.data;
}

async function seed() {
  const admins = loadAdmins();
  const client = createSqlClient();
  const db = drizzle(client);

  try {
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

      console.log(`Seeded admin: ${admin.email}`);
    }
  } finally {
    await client.end();
  }
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
