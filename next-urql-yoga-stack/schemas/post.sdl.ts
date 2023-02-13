import { gql } from "./_util"

export default gql`
  type Post {
    id: ID!
    title: String!
    content: String!

    comments: [Comment!]!
  }

  type Query {
    posts: [Post!]!
  }

  type Mutation {
    createPost(title: String!, content: String!): Post!
  }
`
