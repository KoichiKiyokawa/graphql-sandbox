import { builder } from "@/lib/builder";
import { Post } from "./object";

const createPostInput = builder.inputType("CreatePostInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string({ required: true }),
  }),
});

// Mutation Resolver
builder.mutationField("createPost", (t) =>
  t.field({
    type: Post,
    args: {
      input: t.arg({ type: createPostInput, required: true }),
    },
    resolve: async (_parent, args, ctx) => {
      const user = await ctx.getCurrentUser();
      return ctx.db.post.create({ data: { ...args.input, authorId: user.id } });
    },
  }),
);
