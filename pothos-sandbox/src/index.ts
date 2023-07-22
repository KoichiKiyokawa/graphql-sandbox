import { db } from "@/lib/db";
import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { YogaInitialContext, createYoga, useReadinessCheck } from "graphql-yoga";
import { createServer } from "http";
import { Context, createContext } from "./context";
import { schema } from "./schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga<YogaInitialContext & Context>({
  schema,
  context: createContext(db),
  plugins: [
    useCookies,
    useReadinessCheck({
      endpoint: "/ready",
      check: () => db.$queryRaw`SELECT 1`,
    }),
  ],
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
