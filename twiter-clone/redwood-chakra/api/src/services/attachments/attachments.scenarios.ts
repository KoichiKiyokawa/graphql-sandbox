import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AttachmentCreateArgs>({
  attachment: {
    one: { data: { type: 'String', url: 'String' } },
    two: { data: { type: 'String', url: 'String' } },
  },
})

export type StandardScenario = typeof standard
