import { PrismaClient } from "@prisma/client"

export const context = {
  db: new PrismaClient(),
}

export type Context = typeof context
