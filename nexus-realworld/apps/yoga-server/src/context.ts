import { createPubSub } from "@graphql-yoga/node";
import { Message, PrismaClient, User } from "@prisma/client";

const pubSub = createPubSub<{
  messageAdded: [addedMessage: Message];
}>();

export interface Context {
  db: PrismaClient;
  pubsub: typeof pubSub;
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
