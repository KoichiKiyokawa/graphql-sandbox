import type { QueryResolvers } from "./../../../types.generated";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  arg,
  ctx,
) => {
  return ctx.db.user.findUniqueOrThrow({ where: { id: arg.id } });
};
