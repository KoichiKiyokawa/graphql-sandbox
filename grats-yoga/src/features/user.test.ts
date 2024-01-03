import { describe, it, expect, beforeEach } from "bun:test";
import { user, users as usersQuery } from "./user";
import { truncateAllTables } from "../lib/test";
import { db } from "../lib/db";
import { usersTable } from "../../db/schema";

beforeEach(async () => {
  await truncateAllTables();
});

describe("users Query ", async () => {
  it("user Query should return a user", async () => {
    await db.insert(usersTable).values({ id: "1", name: "target" });
    await db.insert(usersTable).values({ id: "2", name: "non-target" });

    const res = await user(null, { id: "1" }, { db });

    expect(res).toEqual({ id: "1", name: "target" });
  });

  it("user Query should return null if not found", async () => {
    await db.insert(usersTable).values({ id: "1", name: "target" });

    const res = await user(null, { id: "2" }, { db });

    expect(res).toBeUndefined();
  });
});

describe("users Query", async () => {
  beforeEach(async () => {
    for (let i = 1; i <= 100; i++) {
      await db.insert(usersTable).values({ id: String(i), name: `user-${i}` });
    }
  });

  it("paginate", async () => {
    const res = await usersQuery(null, { limit: 2, offset: 1 }, { db });

    expect(res).toEqual([
      // skip 1
      { id: "2", name: "user-2" },
      { id: "3", name: "user-3" },
    ]);
  });

  it("default limit is 100", async () => {
    const res = await usersQuery(null, {}, { db });

    expect(res).toHaveLength(100);
  });
});
