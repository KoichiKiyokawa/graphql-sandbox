import { builder } from "@/lib/builder";
import { User } from "../user/object";
import { Post } from "./object";

// Query resolver
builder.queryFields((t) => ({
  posts: t.field({
    type: [Post],
    resolve: (_parent, _args, ctx) => {
      return ctx.db.post.findMany();
    },
  }),
}));

// Field Resolver
builder.objectFields(Post, (t) => ({
  author: t.field({
    type: User,
    description: "get an author of this post",
    resolve: (parent, _args, ctx) => {
      return ctx.db.user.findUniqueOrThrow({ where: { id: String(parent.id) } });
    },
  }),
}));
