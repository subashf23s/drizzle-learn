import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { UserTable } from "../drizzle/schema";

export const updateUser = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  await db
    .update(UserTable)
    .set({
      firstName: firstName,
      lastName: lastName,
      email: email,
    })
    .where(eq(UserTable.id, id));
};
export const updateUserExample = async () => {
  await updateUser(
    "d0680e78-1ebf-42ab-8352-5effdaa4c01d",
    "Alice",
    "second",
    "alicesecond@gmail.com"
  );
  await updateUser(
    "03a0fe4f-684c-4490-b713-f855d764227e",
    "Bob",
    "First",
    "bobfirst@gmail.com"
  );
};
