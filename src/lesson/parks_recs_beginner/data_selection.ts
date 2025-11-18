import { log } from "console";
import { db } from "../../drizzle/db";
import {
  employee_demographics,
  employeeSalary,
  parks_departments,
} from "../../drizzle/schema";

export const dataSelection = async () => {
  const employee = await db.select().from(employee_demographics);
  log(employee);
  const employee_sal = await db
    .select({ Name: employeeSalary.first_name, Sal: employeeSalary.salary })
    .from(employeeSalary);
  log(employee_sal);
  const departments = await db
    .select({ Name: parks_departments.dept_name })
    .from(parks_departments);
  log(departments);
};
