import { UserModule } from "./generated-types/module-types"

export const resolvers: UserModule.Resolvers = {
  User: {
    articles: async (parent, _args, ctx) => {
      return ctx.db.user
        .findUniqueOrThrow({ where: { id: parent.id } })
        .articles()
    },
  },
}
