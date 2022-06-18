import type {
  QueryResolvers,
  MutationResolvers,
  StatusResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const timelinePublic: QueryResolvers['timelinePublic'] = () => {
  return db.status.findMany({
    include: {
      account: true,
      mediaAttachments: true,
    },
    orderBy: { createAt: 'desc' },
  })
}

export const status: QueryResolvers['status'] = ({ id }) => {
  return db.status.findUnique({
    include: { account: true, mediaAttachments: true },
    where: { id },
  })
}

export const createStatus: MutationResolvers['createStatus'] = ({ input }) => {
  return db.status.create({
    data: input,
  })
}

export const updateStatus: MutationResolvers['updateStatus'] = ({
  id,
  input,
}) => {
  return db.status.update({
    data: input,
    where: { id },
  })
}

export const deleteStatus: MutationResolvers['deleteStatus'] = ({ id }) => {
  return db.status.delete({
    where: { id },
  })
}

export const Status: StatusResolvers = {
  mediaAttachments: (_obj, { root }) =>
    db.status.findUnique({ where: { id: root.id } }).mediaAttachments(),
  account: (_obj, { root }) =>
    db.status.findUnique({ where: { id: root.id } }).account(),
}
