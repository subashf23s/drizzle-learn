import { uuid } from "drizzle-orm/pg-core";
import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
export const UserTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  age: integer("age"),
});
