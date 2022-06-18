import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AccountCreateArgs>({
  account: {
    one: {
      data: { username: 'String3868258', avatar: 'String', header: 'String' },
    },
    two: {
      data: { username: 'String6465852', avatar: 'String', header: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
