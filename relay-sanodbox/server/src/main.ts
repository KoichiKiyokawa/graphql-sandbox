import { createServer } from "@graphql-yoga/node";
import { connectionPlugin, makeSchema } from "nexus";
import { resolve } from "path";
import { context } from "./context";
import * as Schema from "./schema";

export const schema = makeSchema({
  types: [Schema],
  outputs: {
    typegen: resolve("src/generated/nexus.ts"),
    schema: resolve("src/generated/schema.graphql"),
  },
  contextType: {
    module: resolve("src/context.ts"),
    export: "Context",
  },
  plugins: [connectionPlugin()],
});

async function main() {
  const server = createServer({ schema, maskedErrors: false, context });
  await server.start();
}

main();
