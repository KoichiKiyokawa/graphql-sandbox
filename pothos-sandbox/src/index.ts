import { createServer } from "@graphql-yoga/node";
import "./features/user/schema";
import "./features/post/object";
import { builder } from "./lib/builder";
import { db } from "./lib/db";

builder.queryType({});
builder.mutationType({});

const server = createServer({
  schema: builder.toSchema({}),
  context: () => ({
    db,
    getCurrentUser() {
      // TODO;
    },
  }),
});

server.start();
