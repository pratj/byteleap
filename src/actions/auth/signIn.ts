"use server";

import { log } from "console";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  const { user } = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  log("User", user);
  return user;
};
