import { getCurrentUser } from "@/features/auth/service";
import { PrismaClient, User } from "@prisma/client";
import { YogaInitialContext } from "graphql-yoga";

export type Context = {
  db: PrismaClient;
  getCurrentUser(): Promise<User | null>;
};

export const createContext =
  (db: PrismaClient) =>
  ({ request }: YogaInitialContext): Context => ({
    db,
    getCurrentUser: () => getCurrentUser({ db, request }),
  });
