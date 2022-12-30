import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import type { PrismaClient, User } from "@prisma/client";

export const builder = new SchemaBuilder<{
  Context: {
    db: PrismaClient;
    getCurrentUser(): Promise<User>;
  };
}>({
  plugins: [SimpleObjectsPlugin],
});
