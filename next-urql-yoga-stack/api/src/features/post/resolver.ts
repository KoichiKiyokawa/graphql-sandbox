import type { Resolvers } from "~/gql/generated"

export const PostResolver = {
  Query: {
    async posts(_parent, _args, ctx) {
      return ctx.db.post.findMany()
    },
  },
  Mutation: {
    async createPost(_parent, args, ctx) {
      return ctx.db.post.create({ data: args })
    },
  },
  Post: {
    async comments(parent, _args, ctx) {
      return ctx.db.post
        .findUniqueOrThrow({ where: { id: parent.id } })
        .comment()
    },
  },
} satisfies Resolvers
