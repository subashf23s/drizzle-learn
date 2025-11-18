import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { UserTable } from "../drizzle/schema";

export const updateUser = async (
  id: string,
  name: string,
  email: string,
  age: number
) => {
  await db
    .update(UserTable)
    .set({
      name,
      email,
      age,
    })
    .where(eq(UserTable.id, id));
};
export const updateUserExample = async () => {
  await updateUser(
    "d0680e78-1ebf-42ab-8352-5effdaa4c01d",
    "Alice",
    "alicesecond@gmail.com",
    20
  );
  await updateUser(
    "03a0fe4f-684c-4490-b713-f855d764227e",
    "Bob",
    "bobfirst@gmail.com",
    25
  );
};
