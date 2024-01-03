import { Int } from "grats";
import { GqlContext, type Query } from "./base";
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

/** @gqlType */
export type User = {
  /** @gqlField */
  id: string;
  /** @gqlField */
  name: string;
};

/** @gqlField */
export async function user(
  _: Query,
  args: { id: string },
  ctx: GqlContext
): Promise<User | undefined> {
  const [user] = await ctx.db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, args.id));

  return user;
}

/** @gqlField */
export async function users(
  _: Query,
  args: { limit?: Int | null; offset?: Int | null },
  ctx: GqlContext
): Promise<User[]> {
  return await ctx.db
    .select()
    .from(usersTable)
    .limit(args.limit ?? 100)
    .offset(args.offset ?? 0);
}
