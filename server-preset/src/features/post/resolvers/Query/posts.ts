import type { QueryResolvers } from "./../../../types.generated";

export const posts: NonNullable<QueryResolvers["posts"]> = async (
  _parent,
  _arg,
  ctx
) => {
  return ctx.db.post.findMany();
};
