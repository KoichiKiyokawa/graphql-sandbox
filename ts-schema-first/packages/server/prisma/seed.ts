import { PrismaClient } from "@prisma/client"

async function seed() {
  const prisma = new PrismaClient()

  for (let i = 1; i <= 10; i++) {
    await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${1}@example.com`,
      },
    })
  }
}

seed()
