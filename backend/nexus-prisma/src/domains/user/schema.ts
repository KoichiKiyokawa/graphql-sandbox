import { extendType, nonNull, objectType, stringArg } from "nexus";
import { connectionFromPromisedArray } from "graphql-relay";
import { Context } from "../../context";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.connectionField("articles", {
      type: "Article",
      async resolve(parent, args, context: Context) {
        return connectionFromPromisedArray(
          context.prisma.user
            .findUnique({ where: { id: parent.id } })
            .articles(),
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
      async resolve(_parent, args, context) {
        const user = await context.prisma.user.findUnique({
          where: { id: args.id },
        });
        if (!user) throw Error("User not found");

        return user;
      },
    });

    t.nonNull.list.nonNull.field("users", {
      type: "User",
      description: "Get all users",
      resolve(_parent, _args, context) {
        return context.prisma.user.findMany();
      },
    });
  },
});
