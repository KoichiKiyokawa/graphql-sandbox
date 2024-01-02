import { GqlContext, type Query } from "./base";

/** @gqlType */
type User = {
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
): Promise<User | null> {
  const user = await ctx.db.query.users.findFirst({
    where: (field, { eq }) => eq(field.id, args.id),
  });
  return user ?? null;
}

/** @gqlField */
export async function users(
  _: Query,
  _args: unknown,
  ctx: GqlContext
): Promise<User[]> {
  const users = await ctx.db.query.users.findMany();
  return users;
}
