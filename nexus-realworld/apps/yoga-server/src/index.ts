import { createServer } from "@graphql-yoga/node";
import { context } from "~/context";
import { schema } from "~/root-schema";

const server = createServer({ schema, context });
server.start();
