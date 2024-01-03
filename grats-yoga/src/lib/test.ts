import { posts, users } from "../../db/schema";
import { db } from "./db";

const allTables = [posts, users];

// Add a table when you create a new feature
export async function truncateAllTables() {
  for (const table of allTables) {
    await db.delete(table);
  }
}
