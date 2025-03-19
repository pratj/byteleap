import { BetterAuthOptions, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { openAPI } from "better-auth/plugins";

import db from "@/db";

import { account, session, user } from "../../auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      account,
      session,
    },
  }),
  plugins: [openAPI(), nextCookies()], // api/auth/reference
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions);
