import { postsTable, usersTable } from "../../db/schema";
import { db } from "./db";

const allTables = [postsTable, usersTable];

// Add a table when you create a new feature
export async function truncateAllTables() {
  for (const table of allTables) {
    await db.delete(table);
  }
}
