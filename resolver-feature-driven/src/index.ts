import { createSchema, createYoga } from "graphql-yoga"
import { createServer } from "node:http"

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema: createSchema({
    typeDefs: Object.values(
      import.meta.glob("./features/**/*.gql", { eager: true })
    ).map((module: any) => module.default),
    resolvers: Object.values(
      import.meta.glob("./features/**/*.resolver.ts", { eager: true })
    ).map((module: any) => module.resolvers),
  }),
})

// Pass it into a server to hook into request handlers.
// @ts-ignore
const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
