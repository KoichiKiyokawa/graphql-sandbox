import { PrismaClient, User } from "@prisma/client";

import { PubSub } from "mercurius";

export interface Context {
  db: PrismaClient;
  pubsub: PubSub;
  getCurrentUser: () => Promise<User>;
}

const prisma = new PrismaClient({ log: ["error", "info", "query", "warn"] });

export const context: Omit<Context, "pubsub"> = {
  db: prisma,
  async getCurrentUser() {
    const users = await prisma.user.findMany();
    return users[0];
  },
};
