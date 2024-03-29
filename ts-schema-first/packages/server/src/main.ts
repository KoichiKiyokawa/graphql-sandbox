import { createServer } from "@graphql-yoga/node"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { loadFiles } from "@graphql-tools/load-files"
import { createContext } from "./context"
import { join } from "path"

async function main() {
  const [typeDefs, resolvers] = await Promise.all([
    loadFiles("node_modules/@ts-schema-first/schemas/**/*.gql"),
    loadFiles(join(__dirname, "./domains/**/*.resolver.{js,ts}")),
  ])

  const server = createServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    context: createContext,
  })

  server.start()
}

main()
