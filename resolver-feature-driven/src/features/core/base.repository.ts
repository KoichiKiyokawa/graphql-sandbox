import type { PrismaClient } from "@prisma/client"
import { db } from "~/lib/db"

export class BaseRepository {
  protected readonly db: PrismaClient
  constructor(dbInstance: PrismaClient = db) {
    this.db = dbInstance
  }

  static getInstanceForTest(mockDb: PrismaClient) {
    return new this(mockDb)
  }
}
