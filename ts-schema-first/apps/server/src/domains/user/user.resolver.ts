import { Resolvers } from "../../__generated"

const resolver: Resolvers = {
  Query: {
    async user(_parent, args, ctx) {
      const user = await ctx.db.user.findUnique({ where: { id: args.id } })
      return user ?? undefined
    },
    async users(_parent, _args, ctx) {
      return ctx.db.user.findMany()
    },
  },
  User: {
    async posts(parent, args, ctx) {
      return ctx.db.user.findUnique({ where: { id: parent.id } }).posts()
    },
  },
}

export default resolver
