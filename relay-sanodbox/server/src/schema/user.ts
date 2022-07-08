import { extendType, objectType, queryType, stringArg } from "nexus"

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id")
    t.nonNull.string("name")
  },
})

export const UserQuery = queryType({
  definition(t) {
    t.field("user", {
      type: User,
      args: { id: stringArg() },
      resolve: async (_root, { id }, ctx) => {
        return ctx.db.user.findUnique({ where: { id } })
      },
    })
  },
})
