import { connectionFromPromisedArray } from "graphql-relay";
import { extendType, nonNull, objectType, stringArg } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.connectionField("articles", {
      type: "Article",
      resolve(parent, args, ctx) {
        return connectionFromPromisedArray(
          ctx.db.user.findUnique({ where: { id: parent.id } }).articles(),
          args
        );
      },
    });
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("user", {
      type: "User",
      description: "Get the specified user",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const user = await ctx.db.user.findUnique({
          where: { id: args.id },
        });
        if (!user) throw Error("User not found");

        return user;
      },
    });

    t.nonNull.list.nonNull.field("users", {
      type: "User",
      description: "Get all users",
      resolve(_root, _args, ctx) {
        return ctx.db.user.findMany();
      },
    });
  },
});
