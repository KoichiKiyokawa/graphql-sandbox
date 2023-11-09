import { PrismaClient } from "@prisma/client";

export type GraphQLContext = {
  db: PrismaClient;
};
