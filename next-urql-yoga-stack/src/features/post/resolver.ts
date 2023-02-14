import { type Resolvers } from "@/gql/resolver"

export const PostResolver = {
  Query: {
    async posts(_parent, args, ctx) {
      return await ctx.db.post.findMany({
        take: args.per,
        skip: args.page * args.per,
        orderBy: { createdAt: "desc" },
      })
    },
  },
  Mutation: {
    async createPost(_parent, args, ctx) {
      return await ctx.db.post.create({ data: args })
    },
  },
  Post: {
    async comments(parent, _args, ctx) {
      return await ctx.db.post
        .findUniqueOrThrow({ where: { id: parent.id } })
        .comment()
    },
  },
} satisfies Resolvers
