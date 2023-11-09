var _a;
import { PrismaClient } from "@prisma/client";
const prismaClientSingleton = () => {
    return new PrismaClient();
};
const globalForPrisma = globalThis;
const db = (_a = globalForPrisma.db) !== null && _a !== void 0 ? _a : prismaClientSingleton();
export { db };
if (process.env.NODE_ENV !== "production")
    globalForPrisma.db = db;
