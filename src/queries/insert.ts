import { db } from "../drizzle/db";
import { PostTable, UserTable } from "../drizzle/schema";

export const insertUser = async () => {
  await db.insert(UserTable).values({
    name: "Smith",
    email: "bobsmith@gmail.com",
    age: 30,
  });
};
export const insertPost = async () => {
  await db.insert(PostTable).values({
    title: "Third Post",
    content: "This is the content of the third post.",
    authorId: "10f0038a-dd41-4289-8084-6a421804a13c",
  });
};
