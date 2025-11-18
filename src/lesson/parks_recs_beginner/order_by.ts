import { db } from "../../drizzle/db";
import { employee_demographics } from "../../drizzle/schema";
import { asc } from "drizzle-orm";

const orderByEmployee = async () => {
  const result = await db
    .select({
      name: employee_demographics.first_name,
      age: employee_demographics.age,
    })
    .from(employee_demographics)
    .orderBy(asc(employee_demographics.age));
  console.log(result);
};
export const orderBy = async () => {
  await orderByEmployee();
};
