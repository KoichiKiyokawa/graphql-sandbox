import { builder } from "@/lib/builder";
import { User } from "../user/schema";

export const Post = builder.simpleObject("Post", {
  fields: (t) => ({
    id: t.id(),
    title: t.string(),
    content: t.string(),
    published: t.boolean(),
  }),
});
