import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import "./features/post/object";
import "./features/user/schema";
import { builder } from "./lib/builder";
import { db } from "@/lib/db";

builder.queryType({});
builder.mutationType({});

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema: builder.toSchema(), context: { db } });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
