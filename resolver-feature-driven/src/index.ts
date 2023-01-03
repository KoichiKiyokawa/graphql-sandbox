import { createSchema, createYoga } from "graphql-yoga"
import { createServer } from "node:http"

import UserSchema from "~/features/user/user.gql"
import PostSchema from "~/features/post/post.gql"

import { resolvers } from "~/features/user/user.resolver"

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema: createSchema({
    typeDefs: [UserSchema, PostSchema],
    resolvers: [resolvers],
  }),
})

// Pass it into a server to hook into request handlers.
// @ts-ignore
const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
