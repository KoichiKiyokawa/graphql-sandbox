import { createServer } from "@graphql-yoga/node";
import { connectionPlugin, makeSchema } from "nexus";
import { resolve } from "path";
import { context } from "./context";
import * as Schema from "./schema";

const isProd = process.env.NODE_ENV === "production";

export const schema = makeSchema({
  types: [Schema],
  outputs: {
    typegen: isProd && resolve("src/generated/nexus.ts"),
    schema: isProd && resolve("src/generated/schema.graphql"),
  },
  contextType: {
    module: resolve("src/context.ts"),
    export: "Context",
  },
  plugins: [connectionPlugin()],
});

async function main() {
  throw Error("hoge");
  const server = createServer({ schema, maskedErrors: false, context });
  await server.start();
}

if (!process.env.GENERATE_ONLY) main();
