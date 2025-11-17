import { uuid } from "drizzle-orm/pg-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";
export const UserTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});
