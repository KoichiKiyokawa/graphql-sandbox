// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createYoga, createSchema } from "graphql-yoga"
import type { NextApiRequest, NextApiResponse } from "next"

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
      id: ID!
      name: String!
      posts: [Post!]!
    }

    type Post {
      id: ID!
      title: String!
      content: String!
      author: User!
    }

    type Query {
      user(id: ID!): User
      me: User
    }
  `,
  resolvers: {
    Query: {
      user: async (_, { id }) => {
        return { id, name: "John Doe" }
      },
      me: async () => ({ id: "1", name: "John Doe" }),
    },
    User: {
      posts: async (user) => {
        return [
          {
            id: 1,
            title: "Hello World",
            content: "This is my first post",
          },
          {
            id: 2,
            title: "Hello World 2",
            content: "This is my second post",
          },
        ]
      },
    },
    Post: {
      async author() {
        return {
          id: 1,
          name: "John Doe",
        }
      },
    },
  },
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // @ts-ignore
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
})
