import type { PostResolvers } from "./../../types.generated";

export const Post: PostResolvers = {
  author: async (parent, _args, ctx) => {
    return ctx.db.post
      .findUniqueOrThrow({ where: { id: parent.id.toString() } })
      .user();
  },
};
