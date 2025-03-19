"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";

import { InsertGuestbookEntrySchema } from "@/db/schema/guestbook-entries";

export async function createGuestbookEntry(
  prevState: unknown,
  formData: FormData
) {
  const submission = parseWithZod(formData, {
    schema: InsertGuestbookEntrySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  // await db.insert(guestbookEntries).values({
  //   userId: session.user.id,
  //   message: submission.value.message,
  // });

  revalidatePath("/guestbook");
  redirect("/guestbook");
}
