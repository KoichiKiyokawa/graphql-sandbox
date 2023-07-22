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
    async getCurrentUser() {
      const sessionCookie = await request.cookieStore?.get("session");
      if (sessionCookie === undefined) return null;

      const session = await db.session.findUnique({
        where: { token: sessionCookie.value, expiresAt: { gt: new Date() } },
        include: { user: true },
      });
      if (session === null) return null;

      return session.user;
    },
  });
