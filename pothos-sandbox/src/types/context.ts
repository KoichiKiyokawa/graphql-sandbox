import { PrismaClient, User } from "@prisma/client";

export type Context = {
  db: PrismaClient;
  getCurrentUser(): Promise<User>;
};
