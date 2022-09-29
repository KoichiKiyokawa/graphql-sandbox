import { PrismaClient } from "@prisma/client"

declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      db: PrismaClient
    }
  }
}
