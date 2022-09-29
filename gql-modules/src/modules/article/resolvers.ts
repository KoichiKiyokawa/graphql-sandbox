import { ArticleModule } from "./generated-types/module-types"

export const resolvers: ArticleModule.Resolvers = {
  Article: {
    author: async (parent, _args, ctx) => {
      return ctx.db.article
        .findUniqueOrThrow({ where: { slug: parent.slug } })
        .author()
    },
    tagList: async (parent, _args, ctx) => {
      return ctx.db.article
        .findUniqueOrThrow({ where: { slug: parent.slug } })
        .tags()
    },
  },
  Query: {
    article: (_parent, args, ctx) => {
      return ctx.db.article.findUnique({ where: { slug: args.slug } })
    },
    articles: (_parent, _args, ctx) => {
      return ctx.db.article.findMany()
    },
  },
}
