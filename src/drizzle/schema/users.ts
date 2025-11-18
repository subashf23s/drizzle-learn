import { uuid } from "drizzle-orm/pg-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";
export const UserTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
  email: varchar("email", { length: 256 }),
});
