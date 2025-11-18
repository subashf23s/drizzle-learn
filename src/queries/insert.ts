import { db } from "../drizzle/db";
import { UserTable } from "../drizzle/schema";

export const insertUser = async () => {
  await db.insert(UserTable).values({
    name: "Smith",
    email: "bobsmith@gmail.com",
    age: 30,
  });
};
