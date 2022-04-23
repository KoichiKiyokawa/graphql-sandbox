import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String622513' } },
    two: { data: { email: 'String9291039' } },
  },
})

export type StandardScenario = typeof standard
