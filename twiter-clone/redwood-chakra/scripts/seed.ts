import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const seedAccountData: Prisma.AccountCreateInput[] = [...range(1, 5)].map(
      (i) => ({
        username: `user${i}`,
        displayName: `User${i}`,
        statuses: {
          create: [...range(1, 10)].map((j) => ({
            content: `user${i}-content${j}`,
            createAt: new Date(),
            ...(j === 1 && {
              mediaAttachments: {
                create: [...range(1, 2)].map(() => ({
                  type: 'image',
                  url: 'https://placehold.jp/150x150.png',
                })),
              },
            }),
          })),
        },
      })
    )
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      seedAccountData.map(async (data) => {
        const record = await db.account.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) yield i
}
