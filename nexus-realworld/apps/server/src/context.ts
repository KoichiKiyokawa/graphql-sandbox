import { PrismaClient, User } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";

export interface Context {
  db: PrismaClient;
  pubsub: PubSub;
  getCurrentUser: () => Promise<User>;
}

const prisma = new PrismaClient({ log: ["error", "info", "query", "warn"] });
const pubsub = new PubSub();

export const context: Context = {
  db: prisma,
  pubsub,
  async getCurrentUser() {
    const users = await prisma.user.findMany();
    return users[0];
  },
};
