import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

for (let i = 1; i <= 10; i++) {
  const name = `user-${i}`;
  const createdUser = await db.user.create({
    data: {
      name,
      email: `${name}@example.com`,
    },
  });

  for (let j = 1; j <= 100; j++) {
    const title = `${createdUser.name}-post-${j}`;
    await db.post.create({
      data: {
        title,
        content: `${title}-content`,
        authorId: createdUser.id,
      },
    });
  }
}
