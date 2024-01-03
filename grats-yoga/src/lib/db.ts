import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "../../db/schema";

const sqlite = new Database(process.env.DB_URL ?? "sqlite.db");
export const db = drizzle(sqlite, {
  schema,
  logger: process.env.NODE_ENV === "development",
});
