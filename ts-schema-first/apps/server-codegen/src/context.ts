import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export type GraphQLContext = {
  db: PrismaClient
}

export function createContext(): GraphQLContext {
  return { db }
}
