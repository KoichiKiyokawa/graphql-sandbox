import { PrismaClient } from "@prisma/client"

async function seed() {
  const db = new PrismaClient()
  for (let userIndex = 0; userIndex < 10; userIndex++) {
    await db.user.create({
      data: {
        name: `user${userIndex}`,
        email: `user${userIndex}@example.com`,
        posts: {
          createMany: {
            data: [...range(100)].map((p) => ({
              title: `post${p}-title`,
              body: `post${p}-body`,
            })),
          },
        },
      },
    })
  }
}

seed()

function* range(num: number) {
  for (let i = 0; i < num; i++) {
    yield i
  }
}
