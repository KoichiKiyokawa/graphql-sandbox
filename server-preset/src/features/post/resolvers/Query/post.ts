import type { QueryResolvers } from "./../../../types.generated";

export const post: NonNullable<QueryResolvers["post"]> = async (
  _parent,
  arg,
  ctx
) => {
  return ctx.db.post.findUniqueOrThrow({ where: { id: arg.id } });
};
