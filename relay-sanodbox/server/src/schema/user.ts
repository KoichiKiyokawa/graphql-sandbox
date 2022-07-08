import { connectionFromPromisedArray } from "graphql-relay";
import { extendType, nonNull, objectType, queryType, stringArg } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.implements("Node");
    t.nonNull.id("id");
    t.nonNull.string("name");

    t.nonNull.connectionField("posts", {
      type: "Post",
      resolve(root, args, ctx) {
        return connectionFromPromisedArray(
          ctx.db.user.findUnique({ where: { id: root.id } }).posts({ orderBy: { createdAt: "desc" } }),
          args
        );
      },
    });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("user", {
      type: User,
      args: { id: nonNull(stringArg()) },
      async resolve(_root, { id }, ctx) {
        return ctx.db.user.findUnique({ where: { id } });
      },
    });

    t.connectionField("users", {
      type: User,
      async resolve(_root, args, ctx) {
        return connectionFromPromisedArray(ctx.db.user.findMany({ orderBy: { createdAt: "desc" } }), args);
      },
    });
  },
});
