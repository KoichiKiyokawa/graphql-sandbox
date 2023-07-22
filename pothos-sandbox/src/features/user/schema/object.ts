import { builder } from "@/lib/builder";

export const User = builder.simpleObject("User", {
  description: "A user of this service",
  fields: (t) => ({
    id: t.id(),
    name: t.string(),
  }),
});
