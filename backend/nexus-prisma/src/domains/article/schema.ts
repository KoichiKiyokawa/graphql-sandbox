import { Article as TArticle } from "@prisma/client"
import { intArg, objectType, stringArg } from "nexus"
import { Context } from "../../context"

export const Article = objectType({
  name: "Article",
  definition(t) {
    t.nonNull.string("slug", { description: "The unique slug for the article" })
    t.nonNull.string("title", { description: "The title of the article" })
    t.nonNull.string("description", {
      description: "The description of the article",
    })
    t.nonNull.string("body")
    t.nonNull.field("createdAt", { type: "DateTime" })
    t.nonNull.field("updatedAt", { type: "DateTime" })
    t.nonNull.field("author", {
      type: "User",
      description: "The author of the article",
      resolve({ slug }: TArticle, _args, context: Context) {
        return context.prisma.article.findUnique({ where: { slug } }).author()
      },
    })
  },
})

export const ArticleQuery = objectType({
  name: "Query",
  definition(t) {
    t.field("article", {
      type: Article.name,
      args: {
        slug: stringArg(),
      },
      resolve(_parent, args, context: Context) {
        return context.prisma.article.findUnique({ where: { slug: args.slug } })
      },
    })
    t.list.field("articles", {
      type: Article.name,
      args: {
        first: intArg(),
      },
      resolve(_parent, args: { first: number }, context: Context) {
        return context.prisma.article.findMany({ take: args.first })
      },
    })
  },
})
