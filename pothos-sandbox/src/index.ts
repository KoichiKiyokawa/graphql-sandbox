import { db } from "@/lib/db";
import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { YogaInitialContext, createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema";
import { Context, createContext } from "./context";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga<YogaInitialContext & Context>({
  schema,
  context: createContext(db),
  plugins: [useCookies],
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
