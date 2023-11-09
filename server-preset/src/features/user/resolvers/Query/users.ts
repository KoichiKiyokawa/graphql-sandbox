import type { QueryResolvers } from "./../../../types.generated";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  ctx,
) => {
  console.log(ctx.db);
  return ctx.db.user.findMany();
};
