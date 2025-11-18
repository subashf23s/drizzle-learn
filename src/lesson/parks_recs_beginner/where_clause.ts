import { sql } from "drizzle-orm";
import { db } from "../../drizzle/db";

const employeesalary = async () => {
  //   const data = await db.query.employee_salary.findMany({
  //     where: ({ salary }, { gt }) => gt(salary, 45000),
  //   });
  //   const data = await db
  //     .select()
  //     .from(employee_salary)
  //     .where(gt(employee_salary.salary, 45000));
  const data = await db.query.employeeSalary.findMany({
    where: ({ salary }) => sql` ${salary} >= ${45000} `,
  });
  console.log(data);
};
const employeegender = async () => {
  const data = await db.query.employee_demographics.findMany({
    where: ({ gender }) => sql` ${gender} != ${"Female"} `,
  });
  console.log(data);
};
const employeelike = async () => {
  const data = await db.query.employee_demographics.findMany({
    where: ({ first_name }) => sql` ${first_name} LIKE ${"J%"} `,
  });
  console.log(data);
};
export const whereClause = async () => {
  //   await employeesalary();
  //   await employeegender();
  await employeelike();
};
