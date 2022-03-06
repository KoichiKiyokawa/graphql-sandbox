import { resolve } from "path"
import { makeSchema } from "nexus"
import { Article, ArticleQuery } from "./domains/article/schema"
import { User } from "./domains/user/schema"
import { DateTime } from "./scalar"

export const schema = makeSchema({
  types: [User, Article, ArticleQuery, DateTime],
  outputs: {
    schema: resolve("src/generated/schema.graphql"),
    typegen: resolve("src/generated/nexus.ts"),
  },
})
