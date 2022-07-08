import { objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("title");
    t.nonNull.string("body");

    t.nonNull.field("author", {
      type: "User",
      async resolve(root, _args, ctx) {
        const author = await ctx.db.post.findUnique({ where: { id: root.id } }).author();
        if (!author) throw Error("Author not found");

        return author;
      },
    });
  },
});
