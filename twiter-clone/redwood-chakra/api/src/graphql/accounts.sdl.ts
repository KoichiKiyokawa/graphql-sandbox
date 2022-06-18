export const schema = gql`
  type Account {
    id: Int!
    username: String!
    statuses: [Status]!

    displayName: String
    avatar: String
    header: String
  }

  type Query {
    accounts: [Account!]! @requireAuth
    account(id: Int!): Account @requireAuth
  }

  input CreateAccountInput {
    username: String!
    avatar: String!
    header: String!
  }

  input UpdateAccountInput {
    username: String
    avatar: String
    header: String
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account! @requireAuth
    updateAccount(id: Int!, input: UpdateAccountInput!): Account! @requireAuth
    deleteAccount(id: Int!): Account! @requireAuth
  }
`
