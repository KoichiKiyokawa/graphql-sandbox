export default /* GraphQL */ `
  type Post {
    id: ID!
    title: String!
    content: String!

    author: User!
  }

  extend type Query {
    post(id: ID!): Post
  }
`
