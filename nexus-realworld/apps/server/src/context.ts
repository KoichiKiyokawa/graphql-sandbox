import { PrismaClient } from "@prisma/client";

export interface Context {
  db: PrismaClient;
}

const prisma = new PrismaClient({ log: ["error", "info", "query", "warn"] });

export const context: Context = {
  db: prisma,
};
