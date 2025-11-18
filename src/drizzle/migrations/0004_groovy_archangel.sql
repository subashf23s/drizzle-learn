CREATE TABLE "employee_demographics" (
	"employee_id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"age" integer,
	"gender" varchar(10),
	"birth_date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "employee_salary" (
	"employee_id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"occupation" varchar(50),
	"salary" integer,
	"dept_id" integer
);
--> statement-breakpoint
CREATE TABLE "parks_departments" (
	"dept_id" serial PRIMARY KEY NOT NULL,
	"dept_name" varchar(50) NOT NULL
);
