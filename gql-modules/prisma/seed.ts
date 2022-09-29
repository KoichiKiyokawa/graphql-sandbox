import { db } from "../src/lib/db"

async function seed() {
  for (let i = 1; i <= 10; i++) {
    const user = await db.user.create({
      data: { name: `user${i}`, email: `user${i}@example.com` },
    })

    for (let j = 1; j <= 10; j++) {
      await db.article.create({
        data: {
          slug: `article-${i}-${j}`,
          title: `Post ${j}`,
          body: `article body ${j}`,
          description: `article description ${j}`,
          authorId: user.id,
        },
      })
    }
  }
}

seed()
