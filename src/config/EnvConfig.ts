import { config } from "dotenv";

config({ path: ".env" });
export class EnvConfig {
  static DB_URL: string = process.env.DATABASE_URL as string;
}
