import { PrismaClient } from "@prisma/client";
import { YogaInitialContext } from "graphql-yoga";

export type ServiceContext = {
  db: PrismaClient;
  request: YogaInitialContext["request"];
};
