ALTER TABLE "users" RENAME COLUMN "first_name" TO "name";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "age" integer;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "last_name";