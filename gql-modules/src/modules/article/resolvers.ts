import { ArticleModule } from "./generated-types/module-types"

export const resolvers: ArticleModule.Resolvers = {
  Article: {
    author: async (parent, _args, ctx) => {
      return ctx.db.article
        .findUniqueOrThrow({ where: { id: parent.id } })
        .author()
    },
    tagList: async (parent, _args, ctx) => {
      return ctx.db.article
        .findUniqueOrThrow({ where: { id: parent.id } })
        .tags()
    },
  },
  Query: {
    article: (_parent, args, ctx) => {
      return ctx.db.article.findUnique({ where: { id: args.id } })
    },
    articles: (_parent, _args, ctx) => {
      return ctx.db.article.findMany()
    },
  },
}
