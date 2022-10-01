import { Resolvers } from "~/__generated"

const resolver: Resolvers = {
  Query: {
    user(_parent, args, ctx) {
      return ctx.db.user.findUniqueOrThrow({ where: { id: args.id } })
    },
    users(_parent, _args, ctx) {
      return ctx.db.user.findMany()
    },
  },
  User: {
    posts(parent, _args, ctx) {
      return ctx.db.user.findUniqueOrThrow({ where: { id: parent.id } }).posts()
    },
  },
}

export default resolver
