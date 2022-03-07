import { context } from "~/context";
import bcrypt from "bcryptjs";

const { db: prisma } = context;

async function seed() {
  await prisma.article.deleteMany();
  await prisma.user.deleteMany();

  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `user${i}`,
        email: `user${i}@example.com`,
        passwordHash: bcrypt.hashSync("password"),
      },
    });
    for (let j = 0; j < 100; j++) {
      await prisma.article.create({
        data: {
          title: `user${i}-title${j}`,
          description: `user${i}-description${j}`,
          body: `user${i}-body${j}`,
          authorId: user.id,
        },
      });
    }
  }
}

seed();
