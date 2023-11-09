import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./features/typeDefs.generated";
import { resolvers } from "./features/resolvers.generated";
import { db } from "./lib/db";

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  context: { db },
});

const server = createServer(yoga);

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/graphql");
});
