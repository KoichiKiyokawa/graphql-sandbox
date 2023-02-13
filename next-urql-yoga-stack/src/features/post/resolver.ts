import { type Resolvers } from "@/gql/resolver"

export const PostResolver = {
  Query: {
    async posts(_parent, _args, ctx) {
      return await ctx.db.post.findMany()
    },
  },
  Mutation: {
    async createPost(_parent, args, ctx) {
      return await ctx.db.post.create({ data: args })
    },
  },
} satisfies Resolvers
