import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"

type MayBePromise<T> = T | Promise<T>

class RollBackError extends Error {}

export const withMockDB = async (
  func: (db: PrismaClient) => MayBePromise<void>
) => {
  try {
    return await db.$transaction(async (tx) => {
      await func(tx as PrismaClient)
      throw new RollBackError()
    })
  } catch (err) {
    if (err instanceof RollBackError) return
    throw err
  }
}
