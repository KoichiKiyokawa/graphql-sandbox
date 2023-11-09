import type { UserResolvers } from "./../../types.generated";

export const User: UserResolvers = {
  posts: async (parent, _args, ctx) => {
    return ctx.db.user
      .findUniqueOrThrow({ where: { id: parent.id.toString() } })
      .posts();
  },
};
