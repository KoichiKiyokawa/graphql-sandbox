import { db } from '@/lib/db'
import { type PrismaClient } from '@prisma/client'

class RollbackError extends Error {
  constructor() {
    super('Rollback')
  }
}

export async function withTransaction(fn: (db: PrismaClient) => Promise<void>): Promise<void> {
  await db
    .$transaction(async (tx) => {
      await fn(tx as PrismaClient)
      throw new RollbackError()
    })
    .catch((e) => {
      if (e instanceof RollbackError) {
        // do nothing
      } else {
        throw e
      }
    })
}
