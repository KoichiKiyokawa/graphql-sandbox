import type Prisma from '@prisma/client'
import type {
  QueryResolvers,
  MutationResolvers,
  AccountResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const accounts: QueryResolvers['accounts'] = () => {
  return db.account.findMany()
}

export const account: QueryResolvers['account'] = ({ id }) => {
  return db.account.findUnique({
    where: { id },
  })
}

export const updateAccount: MutationResolvers['updateAccount'] = ({
  id,
  input,
}) => {
  return db.account.update({
    data: {
      username: input.username || undefined,
      displayName: input.displayName || undefined,
      avatar: input.avatar || undefined,
      header: input.header || undefined,
    },
    where: { id },
  })
}

export const deleteAccount: MutationResolvers['deleteAccount'] = ({ id }) => {
  return db.account.delete({
    where: { id },
  })
}

export const follow: MutationResolvers['follow'] = async (arg, { context }) => {
  if (arg == null) throw Error('username is required')

  const currentUser = context.currentUser as unknown as Prisma.Account
  if (currentUser == null) throw Error('You must be logged in to follow')

  const { username } = arg
  const resultPromise = db.account.update({
    data: { followings: { connect: { username } } },
    where: { username },
  })

  const followedByPromise = db.account.findFirst({
    where: { username, followings: { some: { id: currentUser.id } } },
  })

  return {
    id: (await resultPromise).id,
    following: true,
    followedBy: !!(await followedByPromise),
  }
}

export const Account: AccountResolvers = {
  statuses: (_obj, { root }) =>
    db.account.findUnique({ where: { id: root.id } }).statuses(),
  isCurrentAccountFollowingTo: async (_obj, { root }, { context }) => {
    return !!db.account.findFirst({
      where: {
        id: root.id,
        followers: { some: { id: context.currentUser.id } },
      },
    })
  },
  isCurrentAccountFollowedBy: async (_obj, { root }, { context }) => {
    return !!db.account.findFirst({
      where: {
        id: root.id,
        followings: { some: { id: context.currentUser.id } },
      },
    })
  },
}
