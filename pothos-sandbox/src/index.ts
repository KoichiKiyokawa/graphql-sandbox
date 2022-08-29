import { createServer } from "@graphql-yoga/node";
import { schema } from "./domains/user/schema";

const server = createServer({
  schema,
});

server.start();
