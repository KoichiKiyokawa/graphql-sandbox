import { posts, users } from "../db/schema";
import { randomUUID } from "crypto";

import { db } from "../src/lib/db";

for (let i = 1; i <= 10; i++) {
  const userId = randomUUID();
  await db.insert(users).values({ id: userId, name: `User ${i}` });
  for (let j = 1; j <= 10; j++) {
    await db.insert(posts).values({
      id: randomUUID(),
      userId,
      title: `user${i}-post${j}title`,
      body: `user${i}-post${j}body`,
    });
  }
}
