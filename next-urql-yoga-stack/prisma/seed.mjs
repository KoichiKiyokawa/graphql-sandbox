import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

for (let i = 0; i < 100; i++) {
  await db.post.create({
    data: { title: `post${i}-title`, content: `post${i}-content` },
  })
}
