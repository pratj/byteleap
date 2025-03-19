import db from "@/db";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";

 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", 
    }),
    plugins: [openAPI()], // api/auth/reference
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
    },
    emailAndPassword: {
        enabled: true,
    },
} satisfies BetterAuthOptions);