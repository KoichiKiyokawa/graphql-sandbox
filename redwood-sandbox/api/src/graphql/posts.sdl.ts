export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    authorId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    authorId: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
    authorId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
