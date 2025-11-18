import { count } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { employee_demographics } from "../../drizzle/schema";

const groupByGender = async () => {
  const result = await db
    .select({
      gender: employee_demographics.gender,
      count: count(),
    })
    .from(employee_demographics)
    .groupBy(employee_demographics.gender);
  console.log(result);
};
export const groupBy = async () => {
  await groupByGender();
};
