import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"

export function findAll() {
  return db
}

class PostService {
  constructor(private readonly db: PrismaClient) {}

  findAll() {
    return this.db.post.findMany()
  }
}

export const postService = new PostService(db)

export const getPostServiceForTest = (db: PrismaClient) => new PostService(db)
