import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StatusCreateArgs>({
  status: {
    one: {
      data: {
        content: 'String',
        account: {
          create: {
            username: 'String8788504',
            avatar: 'String',
            header: 'String',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        account: {
          create: {
            username: 'String4753735',
            avatar: 'String',
            header: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
