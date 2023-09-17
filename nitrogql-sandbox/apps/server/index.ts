import { createSchema, createYoga } from "graphql-yoga";
import { schema } from "./generated/graphql";
import { userResolvers } from "./features/user/resolver";
import { PrismaClient } from "@prisma/client";
import { coreResolvers } from "./features/core/resolver";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers: [coreResolvers, userResolvers],
  }),
  context: {
    db: new PrismaClient(),
  },
});
// @ts-expect-error
const server = Bun.serve(yoga);
console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
