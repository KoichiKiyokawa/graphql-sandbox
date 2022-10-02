import { assertNotNull } from "~/utils/assert"
import { Resolvers } from "~/__generated"

const resolvers: Resolvers = {
  Query: {
    post(_parent, args, ctx) {
      return ctx.db.post.findUniqueOrThrow({ where: { id: args.id } })
    },
    posts(_parent, _args, ctx) {
      return ctx.db.post.findMany()
    },
  },
  Post: {
    async author(parent, _args, ctx) {
      return assertNotNull(
        ctx.db.post.findUnique({ where: { id: parent.id } }).user()
      )
    },
  },
}

export default resolvers
