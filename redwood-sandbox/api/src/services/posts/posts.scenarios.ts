import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2023-02-15T13:42:17.480Z',
        author: { create: { email: 'String4689626' } },
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2023-02-15T13:42:17.480Z',
        author: { create: { email: 'String9899303' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
