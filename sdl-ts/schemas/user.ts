import { gql, ConnectionDef } from "./_utils"

export default gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
    users: [UserConnection!]!
  }

  ${ConnectionDef("User")}
`
