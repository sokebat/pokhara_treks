import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { loginFormSchema } from "@/features/auth/validation/login.validation";

/** Precomputed hash so missing-user logins still run bcrypt (same timing). */
const DUMMY_PASSWORD_HASH =
  "$2b$12$BacWomOuHopD0LgCso0tw.94s8zd5S7FVHCJ8LLYlAYq1Zl4wI89S";

export async function authorizeAdmin(credentials: unknown) {
  const parsed = loginFormSchema.safeParse(credentials);
  if (!parsed.success) return null;

  const email = parsed.data.email.toLowerCase();
  const { password } = parsed.data;

  const [user] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      passwordHash: users.passwordHash,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  const passwordHash = user?.passwordHash ?? DUMMY_PASSWORD_HASH;
  const passwordsMatch = await bcrypt.compare(password, passwordHash);

  if (!user || !passwordsMatch) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
