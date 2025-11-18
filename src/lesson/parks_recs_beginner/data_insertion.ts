import { db } from "../../drizzle/db";
import {
  employee_demographics,
  employee_salary,
  parks_departments,
} from "../../drizzle/schema";

const employee_demographicsData = [
  {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    gender: "Male",
    birth_date: new Date("1993-01-15"),
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    age: 28,
    gender: "Female",
    birth_date: new Date("1995-05-22"),
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    age: 35,
    gender: "Female",
    birth_date: new Date("1988-11-30"),
  },
  {
    first_name: "Bob",
    last_name: "Brown",
    age: 40,
    gender: "Male",
    birth_date: new Date("1983-07-09"),
  },
  {
    first_name: "Charlie",
    last_name: "Davis",
    age: 32,
    gender: "Male",
    birth_date: new Date("1991-03-14"),
  },
];

const employee_salaryData = [
  {
    first_name: "John",
    last_name: "Doe",
    occupation: "Park Ranger",
    salary: 50000,
    dept_id: 1,
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    occupation: "Maintenance Worker",
    salary: 45000,
    dept_id: 2,
  },
];
const parks_departmentsData = [
  { dept_name: "Parks and Recreation" },
  { dept_name: "Animal Control" },
  { dept_name: "Public Works" },
  { dept_name: "Healthcare" },
  { dept_name: "Library" },
  { dept_name: "Finance" },
];

export const dataInsertion = async () => {
  await db.insert(employee_demographics).values(employee_demographicsData);
  await db.insert(employee_salary).values(employee_salaryData);
  await db.insert(parks_departments).values(parks_departmentsData);
};
