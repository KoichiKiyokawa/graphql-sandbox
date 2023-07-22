import { withTransaction } from "@/test/util";
import { expect, test } from "vitest";
import { createContext } from ".";

test("can get user if db session is not expired", () =>
  withTransaction(async (db) => {
    const user = await db.user.create({
      data: { id: "user1", name: "user1", email: "user1@example.com", password: "password" },
    });
    const session = await db.session.create({
      data: { expiresAt: new Date(new Date().getTime() + 60 * 60 * 24 * 1000), userId: user.id },
    });
    const ctx = createContext(db)({ request: { cookieStore: { get: async () => ({ value: session.token }) } } } as any);

    const res = await ctx.getCurrentUser();

    expect(res).toMatchObject(user);
  }));

test("can get user if db session is expired", () =>
  withTransaction(async (db) => {
    const user = await db.user.create({
      data: { id: "user1", name: "user1", email: "user1@example.com", password: "password" },
    });
    const session = await db.session.create({
      data: { expiresAt: new Date(new Date().getTime() - 60 * 60 * 24 * 1000), userId: user.id },
    });
    const ctx = createContext(db)({ request: { cookieStore: { get: async () => ({ value: session.token }) } } } as any);

    const res = await ctx.getCurrentUser();

    expect(res).toBeNull();
  }));
