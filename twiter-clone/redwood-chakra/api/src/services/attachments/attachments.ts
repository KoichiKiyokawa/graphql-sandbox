import type {
  QueryResolvers,
  MutationResolvers,
  AttachmentResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attachments: QueryResolvers['attachments'] = () => {
  return db.attachment.findMany()
}

export const attachment: QueryResolvers['attachment'] = ({ id }) => {
  return db.attachment.findUnique({
    where: { id },
  })
}

export const createAttachment: MutationResolvers['createAttachment'] = ({
  input,
}) => {
  return db.attachment.create({
    data: input,
  })
}

export const updateAttachment: MutationResolvers['updateAttachment'] = ({
  id,
  input,
}) => {
  return db.attachment.update({
    data: input,
    where: { id },
  })
}

export const deleteAttachment: MutationResolvers['deleteAttachment'] = ({
  id,
}) => {
  return db.attachment.delete({
    where: { id },
  })
}

export const Attachment: AttachmentResolvers = {
  statuses: (_obj, { root }) =>
    db.attachment.findUnique({ where: { id: root.id } }).statuses(),
}
