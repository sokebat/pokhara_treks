/**
 * Creates (or updates the password of) an admin user.
 *
 * Usage:
 *   pnpm db:create-admin -- --name="Jane Doe" --email=jane@pokharatreks.com --password=supersecret [--role=admin|editor]
 */
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

import { users } from "../src/db/schema";

config({ path: ".env.local" });

function parseArgs() {
  const args: Record<string, string> = {};
  for (const arg of process.argv.slice(2)) {
    const match = /^--([^=]+)=(.*)$/.exec(arg);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

async function main() {
  const { name, email, password, role } = parseArgs();

  if (!name || !email || !password) {
    console.error(
      'Usage: pnpm db:create-admin -- --name="Jane Doe" --email=jane@pokharatreks.com --password=supersecret [--role=admin|editor]'
    );
    process.exit(1);
  }

  if (role && role !== "admin" && role !== "editor") {
    console.error('--role must be "admin" or "editor"');
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Add it to .env.local first.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  const normalizedEmail = email.toLowerCase();
  const passwordHash = await bcrypt.hash(password, 12);

  const [existing] = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, normalizedEmail))
    .limit(1);

  if (existing) {
    await db
      .update(users)
      .set({ name, passwordHash, role: (role as "admin" | "editor") ?? "admin" })
      .where(eq(users.email, normalizedEmail));
    console.log(`Updated existing admin: ${normalizedEmail}`);
  } else {
    await db.insert(users).values({
      name,
      email: normalizedEmail,
      passwordHash,
      role: (role as "admin" | "editor") ?? "admin",
    });
    console.log(`Created admin: ${normalizedEmail}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
