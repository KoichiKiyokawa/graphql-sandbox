import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String4587254' } },
    two: { data: { email: 'String1127572' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
