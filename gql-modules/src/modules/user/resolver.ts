import { UserModule } from "./generated-types/module-types"

export const resolvers: UserModule.Resolvers = {
  Query: {
    users: async (parent, args, ctx) => {
      return ctx.db.user.findMany()
    },
    user: async (parent, args, ctx) => {
      return ctx.db.user.findUnique({ where: { id: args.id } })
    },
  },
}
