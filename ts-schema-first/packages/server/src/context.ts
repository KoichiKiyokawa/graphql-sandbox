import { PrismaClient } from "@prisma/client"
import { db } from "./lib/db"

export type GraphQLContext = {
  db: PrismaClient
}

export function createContext(): GraphQLContext {
  return { db }
}
