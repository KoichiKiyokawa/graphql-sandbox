export const schema = gql`
  type Status {
    id: Int!
    content: String!
    mediaAttachments: [Attachment]!
    createAt: DateTime!
    account: Account!
  }

  type Query {
    timelinePublic(
      onlyMedia: Boolean
      maxId: Int
      sinceId: Int
      limit: Int
    ): [Status!]! @skipAuth
    status(id: Int!): Status @requireAuth
  }

  input CreateStatusInput {
    content: String!
    createAt: DateTime!
    accountId: Int!
  }

  input UpdateStatusInput {
    content: String
    createAt: DateTime
    accountId: Int
  }

  type Mutation {
    createStatus(input: CreateStatusInput!): Status! @requireAuth
    updateStatus(id: Int!, input: UpdateStatusInput!): Status! @requireAuth
    deleteStatus(id: Int!): Status! @requireAuth
  }
`
