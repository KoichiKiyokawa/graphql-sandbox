import { db } from "~/lib/db"

async function seed() {
  for (let i = 0; i < 10; i++) {
    await db.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
      },
    })
  }
}

seed()
