"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/lib/auth";

export const signUp = async (email: string, password: string, name: string) => {
  const { user } = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      id: randomUUID(),
      emailVerified: true,
      createdAt: new Date().toISOString(), // TODO: remove this once we have a database to store the user in
      updatedAt: new Date().toISOString(), // TODO: remove this once we have a database to store the user in
    },
  });
  console.log("User signed up successfully", user);
  return user;
};
