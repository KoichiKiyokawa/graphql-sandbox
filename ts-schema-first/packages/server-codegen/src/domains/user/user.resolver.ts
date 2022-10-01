import { Resolvers } from "~/__generated"

const resolver: Resolvers = {
  Query: {
    user(_parent, args, ctx) {
      return ctx.db.user.findUniqueOrThrow({ where: { id: args.id } })
    },
    users(_parent, _args, ctx) {
      return ctx.db.user.findMany({ orderBy: { id: "asc" } })
    },
  },
  User: {
    posts(parent, _args, ctx) {
      return ctx.db.user.findUniqueOrThrow({ where: { id: parent.id } }).posts()
    },
    async postCount(parent, _args, ctx) {
      const data = await ctx.db.user.findUniqueOrThrow({
        where: { id: parent.id },
        include: { _count: { select: { posts: true } } },
      })
      return data._count.posts
    },
  },
}

export default resolver
