export const schema = gql`
  type Account {
    id: Int!
    username: String!
    statuses: [Status]!

    displayName: String
    avatar: String
    header: String
    note: String

    """
    Whether the logged in user is following this account or not
    """
    isCurrentAccountFollowingTo: Boolean! @requireAuth
    """
    Whether the logged in user is followed by this account or not
    """
    isCurrentAccountFollowedBy: Boolean! @requireAuth
  }

  type RelationResult {
    id: Int!
    following: Boolean!
    followedBy: Boolean!
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
    displayName: String
    avatar: String
    header: String
  }

  type Mutation {
    updateAccount(id: Int!, input: UpdateAccountInput!): Account! @requireAuth
    deleteAccount(id: Int!): Account! @requireAuth
    follow(username: String!): RelationResult! @requireAuth
    unFollow(username: String!): RelationResult! @requireAuth
  }
`
