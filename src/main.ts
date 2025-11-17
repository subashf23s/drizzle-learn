import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";
async function main() {
  await db.insert(UserTable).values({
    name: "Bob",
  });
  const users = await db.select().from(UserTable);
  console.log(users);
}
main();
