import { db } from "@/lib/db"
import { Result, createError, createResultFromPromise } from "@/utils/result"
import { Post, PrismaClient } from "@prisma/client"
import { updatePostSchema } from "./schema"

class PostService {
  constructor(private readonly db: PrismaClient) {}

  findAll() {
    return createResultFromPromise(this.db.post.findMany())
  }

  findById(id: string) {
    return createResultFromPromise(this.db.post.findUnique({ where: { id } }))
  }

  async update(
    id: string,
    data: { title: string; content: string }
  ): Promise<Result<Post, Error>> {
    const res = updatePostSchema.safeParse(data)
    if (!res.success) return res

    return createResultFromPromise(
      this.db.post.update({ where: { id }, data: res.data })
    )
  }
}

export const postService = new PostService(db)

export const getPostServiceForTest = (db: PrismaClient) => new PostService(db)
