import { log } from "console";
import { db } from "../drizzle/db";
import { PostTable, UserTable } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export async function selectUsers() {
  const users = await db.select().from(UserTable);
  log(users);
}

export const selectPostsofUser = async (userId: string) => {
  const userPosts = await db
    .select({
      postTitle: PostTable.title,
      postContent: PostTable.content,
      authorName: UserTable.name,
    })
    .from(PostTable)
    .leftJoin(UserTable, eq(PostTable.authorId, UserTable.id))
    .where(eq(PostTable.authorId, userId));
  log(userPosts);
};
