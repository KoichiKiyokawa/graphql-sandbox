import { createServer } from "@graphql-yoga/node"
import { makeSchema } from "nexus"
import { resolve } from "path"
import * as Schema from "./schema"

export const schema = makeSchema({
  types: [Schema],
  outputs: {
    typegen: resolve("src/generated/nexus.ts"),
  },
  contextType: {
    module: resolve("src/context.ts"),
    export: "Context",
  },
})

async function main() {
  const server = createServer({ schema })
  await server.start()
}

main()
