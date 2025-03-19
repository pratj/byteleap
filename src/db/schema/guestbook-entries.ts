import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import users from "./user";

const guestbookEntries = pgTable("guestbook_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

export const guestbookEntriesRelations = relations(
  guestbookEntries,
  ({ one }) => ({
    user: one(users, {
      fields: [guestbookEntries.userId],
      references: [users.id],
    }),
  })
);

export const InsertGuestbookEntrySchema = createInsertSchema(
  guestbookEntries
).omit({
  userId: true,
  createdAt: true,
});

export default guestbookEntries;
