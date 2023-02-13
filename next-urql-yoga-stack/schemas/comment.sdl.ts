import { gql } from "./_util"

export default gql`
  type Comment {
    id: ID!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
