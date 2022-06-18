export const schema = gql`
  type Attachment {
    id: Int!
    type: String!
    url: String!
  }

  type Query {
    attachments: [Attachment!]! @requireAuth
    attachment(id: Int!): Attachment @requireAuth
  }

  input CreateAttachmentInput {
    type: String!
    url: String!
  }

  input UpdateAttachmentInput {
    type: String
    url: String
  }

  type Mutation {
    createAttachment(input: CreateAttachmentInput!): Attachment! @requireAuth
    updateAttachment(id: Int!, input: UpdateAttachmentInput!): Attachment!
      @requireAuth
    deleteAttachment(id: Int!): Attachment! @requireAuth
  }
`
