import { makeSchema } from "nexus"
import { Article, ArticleQuery } from "./domains/article/schema"
import { User } from "./domains/user/schema"
import { DateTime } from "./scalar"

export const schema = makeSchema({
  types: [User, Article, ArticleQuery, DateTime],
})
