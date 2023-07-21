import { builder } from "@/lib/builder";

export const Post = builder.simpleObject("Post", {
  fields: (t) => ({
    id: t.id(),
    title: t.string(),
    content: t.string(),
    published: t.boolean(),
  }),
});
