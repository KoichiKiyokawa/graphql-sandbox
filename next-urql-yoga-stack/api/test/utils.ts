import type { PrismaClient } from "@prisma/client"
import { context } from "@/features/core/context"

class Rollback extends Error {}

export const useTransactionalDB = async (
  fn: (db: PrismaClient) => Promise<void>
): Promise<void> => {
  await context.db
    .$transaction(async (tx) => {
      await fn(tx as PrismaClient)
      throw new Rollback()
    })
    .catch((err) => {
      if (!(err instanceof Rollback)) {
        throw err
      }
    })
}

export function assertNonNull<T>(value: T | undefined): asserts value is T {
  expect(value).not.toBeUndefined()
}
