export default /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
`
