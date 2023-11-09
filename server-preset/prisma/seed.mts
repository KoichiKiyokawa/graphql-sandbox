import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

for (let i = 0; i < 10; i++) {
  await db.user.create({
    data: {
      name: `user${i}`,
      email: `user${i}@example.com`,
      password: "hogehoge",
    },
  });
}
