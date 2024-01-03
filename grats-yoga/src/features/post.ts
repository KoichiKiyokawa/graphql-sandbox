import { GqlContext, Query } from "./base";
import { Int } from "grats";
import { User } from "./user";
import DataLoader from "dataloader";
import { db } from "../lib/db";
import { sortItemsByFieldAndKeys } from "../utils/dataloader";

/** @gqlType */
export type Post = {
  /** @gqlField */
  id: string;
  /** @gqlField */
  userId: string;
  /** @gqlField */
  title: string;
  /** @gqlField */
  body: string;
};

/** @gqlField */
export async function post(
  _: Query,
  args: { id: string },
  ctx: GqlContext
): Promise<Post | undefined> {
  return ctx.db.query.posts.findFirst({
    where: (fields, { eq }) => eq(fields.id, args.id),
  });
}

/** @gqlField */
export async function posts(
  _: Query,
  args: { limit?: Int | null; offset?: Int | null },
  ctx: GqlContext
): Promise<Post[]> {
  return ctx.db.query.posts.findMany({
    limit: args.limit ?? 100,
    offset: args.offset ?? 0,
  });
}

const authorLoader = new DataLoader<string, User>(async (authorIds) => {
  const users = await db.query.users.findMany({
    where: (fields, { inArray }) => inArray(fields.id, authorIds as string[]),
  });
  return sortItemsByFieldAndKeys(users, "id", authorIds);
});

/** @gqlField */
export async function author(parent: Post, _: unknown): Promise<User> {
  return authorLoader.load(parent.userId);
}
