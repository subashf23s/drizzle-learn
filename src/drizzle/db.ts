import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { EnvConfig } from "../config/EnvConfig";

const connectionString = EnvConfig.DB_URL;
const dbClient = postgres(connectionString);

export const db = drizzle(dbClient, { schema, logger: true });
