import { makeSchema } from "nexus";
import { resolve } from "path";
import { ArticleTypes } from "./domains/article/schema";
import { AuthTypes } from "./domains/auth/schema";
import { CoreTypes } from "./domains/core/schema";
import { UserTypes } from "./domains/user/schema";
import { Scalars } from "./scalar";

export const schema = makeSchema({
  types: [UserTypes, ArticleTypes, AuthTypes, CoreTypes, Scalars],
  contextType: { module: resolve("src/context.ts"), export: "Context" },
  outputs: {
    schema: resolve("src/generated/schema.graphql"),
    typegen: resolve("src/generated/nexus.ts"),
  },
});
