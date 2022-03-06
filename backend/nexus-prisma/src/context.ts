import type { PrismaClient as tPrismaClient } from "@prisma/client"
import pkg from "@prisma/client"
const { PrismaClient } = pkg

export interface Context {
  prisma: tPrismaClient
}

const prisma = new PrismaClient({ log: ["error", "info", "query", "warn"] })

export const context: Context = {
  prisma: prisma,
}
