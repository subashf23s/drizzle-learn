import { log } from "console";
import { db } from "../drizzle/db";
import { UserTable } from "../drizzle/schema";

export async function selectUsers() {
  const users = await db.select().from(UserTable);
  log(users);
}
