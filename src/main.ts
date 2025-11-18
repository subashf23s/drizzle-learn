import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema/users";
async function main() {
  await db.insert(UserTable).values({
    firstName: "Bob",
    lastName: "Smith",
    email: "bobsmith@gmail.com",
  });
  const users = await db.select().from(UserTable);
  console.log(users);
}
main();
