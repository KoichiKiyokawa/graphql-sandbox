import { objectType } from "nexus";
import { Context } from "../../context";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.string("name");
    t.nonNull.string("email");
    t.nonNull.list.field("articles", {
      type: "Article",
      resolve(parent, _args, context: Context) {
        return context.prisma.user
          .findUnique({ where: { id: parent.id } })
          .articles();
      },
    });
  },
});
