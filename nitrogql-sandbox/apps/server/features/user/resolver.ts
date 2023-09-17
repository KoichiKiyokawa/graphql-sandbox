import { Resolvers } from "@/generated/resolvers";
import { Context } from "../core/context";

export const userResolvers: Resolvers<Context> = {
  Query: {
    async users(_parent, _args, ctx) {
      return ctx.db.user.findMany();
    },
    async user(_parent, args, ctx) {
      return ctx.db.user.findUniqueOrThrow({ where: { id: args.id } });
    },
  },
  User: {
    posts(parent, args, ctx) {
      return ctx.db.user
        .findUniqueOrThrow({ where: { id: parent.id } })
        .posts({ take: args.limit ?? undefined });
    },
  },
};
