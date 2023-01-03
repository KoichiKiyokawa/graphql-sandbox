import { createSchema, createYoga } from "graphql-yoga"
import { createServer } from "node:http"
import { Context, createContext } from "./context"

export const schema = createSchema<Context>({
  typeDefs: /* GraphQL */ `
    type Query {
      health: String
      me: String
    }

    type Mutation {
      login: String
      logout: String
    }
  `,
  resolvers: {
    Query: {
      me: (_parent, _args, ctx) => ctx.getCurrentUserId(),
    },
    Mutation: {
      login: (_parent, _args, ctx) => {
        ctx.setCurrentUserId("1")
      },
      logout: (_parent, _args, ctx) => {
        ctx.setCurrentUserId(null)
        return "ok"
      },
    },
  },
})

const yoga = createYoga({
  schema,
  context: createContext,
})

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
