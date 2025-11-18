import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./users";

export const PostTable = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 256 }),
  content: varchar("content", { length: 1024 }),
  authorId: uuid("author_id").references(() => UserTable.id),
});
