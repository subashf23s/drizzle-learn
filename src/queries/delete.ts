import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { UserTable } from "../drizzle/schema";

export const deleteUserById = async (id: string) => {
  await db.delete(UserTable).where(eq(UserTable.id, id));
};
export const deleteUserExample = async () => {
  await deleteUserById("353ac3c6-3d02-42a5-91b9-9f1946fc941d");
};
