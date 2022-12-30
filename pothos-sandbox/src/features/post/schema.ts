import { builder } from "../../lib/builder";
import { User } from "../user/schema";

export const Post = builder.simpleObject("Post", {
  fields: (t) => ({
    id: t.id(),
    title: t.string(),
    content: t.string(),
    published: t.boolean(),
  }),
});

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

const createPostInput = builder.inputType("CreatePostInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string({ required: true }),
  }),
});

// Mutation Resolver
builder.mutationFields((t) => ({
  createPost: t.field({
    type: Post,
    args: {
      input: t.arg({ type: createPostInput, required: true }),
    },
    resolve: async (_parent, args, ctx) => {
      const user = await ctx.getCurrentUser();
      return ctx.db.post.create({ data: { ...args.input, authorId: user.id } });
    },
  }),
}));
