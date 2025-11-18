import { sql } from "drizzle-orm";
import { db } from "../../drizzle/db";

export const whereClause = async () => {
  //   const data = await db.query.employee_salary.findMany({
  //     where: ({ salary }, { gt }) => gt(salary, 45000),
  //   });
  //   const data = await db
  //     .select()
  //     .from(employee_salary)
  //     .where(gt(employee_salary.salary, 45000));
  const data = await db.query.employeeSalary.findMany({
    where: ({ salary }) => sql` ${salary} > ${45000} `,
  });
  console.log(data);
};
