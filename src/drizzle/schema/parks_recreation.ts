import { pgTable, serial, varchar, integer, date } from "drizzle-orm/pg-core";

export const employee_demographics = pgTable("employee_demographics", {
  employee_id: serial("employee_id").primaryKey(),
  first_name: varchar("first_name", { length: 50 }),
  last_name: varchar("last_name", { length: 50 }),
  age: integer("age"),
  gender: varchar("gender", { length: 10 }),
  birth_date: date("birth_date", { mode: "date" }).notNull(),
});

export const employeeSalary = pgTable("employee_salary", {
  employee_id: serial("employee_id").primaryKey(),
  first_name: varchar("first_name", { length: 50 }),
  last_name: varchar("last_name", { length: 50 }),
  occupation: varchar("occupation", { length: 50 }),
  salary: integer("salary"),
  dept_id: integer("dept_id"),
});

export const parks_departments = pgTable("parks_departments", {
  dept_id: serial("dept_id").primaryKey(),
  dept_name: varchar("dept_name", { length: 50 }).notNull(),
});
