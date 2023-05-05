import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

for (let i = 0; i < 10; i++) {
  await db.post.create({
    data: { title: `post-title-${i}`, content: `post-content-${i}` },
  })
}
