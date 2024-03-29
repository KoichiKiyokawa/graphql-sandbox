import { withTransaction } from '@/test/util'
import { expect, test } from 'vitest'
import { getCurrentUser } from './service'

test('can get user if db session is not expired', async () => {
  await withTransaction(async (db) => {
    const user = await db.user.create({
      data: { id: 'user1', name: 'user1', email: 'user1@example.com', password: 'password' },
    })
    const session = await db.session.create({
      data: { expiresAt: new Date(new Date().getTime() + 60 * 60 * 24 * 1000), userId: user.id },
    })

    const res = await getCurrentUser({
      db,
      request: { cookieStore: { get: async () => ({ value: session.token }) } } as any,
    })

    expect(res).toMatchObject(user)
  })
})

test('can get user if db session is expired', async () => {
  await withTransaction(async (db) => {
    const user = await db.user.create({
      data: { id: 'user1', name: 'user1', email: 'user1@example.com', password: 'password' },
    })
    const session = await db.session.create({
      data: { expiresAt: new Date(new Date().getTime() - 60 * 60 * 24 * 1000), userId: user.id },
    })

    const res = await getCurrentUser({
      db,
      request: { cookieStore: { get: async () => ({ value: session.token }) } } as any,
    })

    expect(res).toBeNull()
  })
})
