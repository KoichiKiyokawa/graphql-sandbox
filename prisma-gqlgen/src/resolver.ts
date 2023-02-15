import { PrismaClient } from "@prisma/client"
import { Resolvers } from "./generated/graphql"

const db = new PrismaClient()

export const Query: Resolvers = {
  Query: {
    me: (parent, args, ctx) => {
      return db.user.findFirstOrThrow()
    },
  },
}
