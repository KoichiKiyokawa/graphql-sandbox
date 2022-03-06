import { resolve } from "path"
import { makeSchema } from "nexus"
import { ArticleTypes } from "./domains/article/schema"
import { User } from "./domains/user/schema"
import { DateTime } from "./scalar"
import { AuthTypes } from "./domains/auth/schema"

export const schema = makeSchema({
  types: [User, ArticleTypes, AuthTypes, DateTime],
  contextType: { module: resolve("src/context.ts"), export: "Context" },
  outputs: {
    schema: resolve("src/generated/schema.graphql"),
    typegen: resolve("src/generated/nexus.ts"),
  },
})
