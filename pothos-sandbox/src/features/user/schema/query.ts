import { builder } from '@/lib/builder'
import { User } from './object'

builder.queryField('users', (t) =>
  t.field({
    type: [User],
    description: 'get all users',
    resolve: async (_parent, _args, ctx) => {
      return await ctx.db.user.findMany()
    },
  }),
)

builder.queryField('user', (t) =>
  t.field({
    type: User,
    description: 'get a specific user',
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (_parent, args, ctx) => {
      return ctx.db.user.findUnique({ where: { id: args.id } })
    },
  }),
)
