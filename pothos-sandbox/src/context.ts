import { getCurrentUser } from '@/features/auth/service'
import { type PrismaClient, type User } from '@prisma/client'
import { type YogaInitialContext } from 'graphql-yoga'

export interface Context {
  db: PrismaClient
  getCurrentUser: () => Promise<User | null>
}

export const createContext =
  (db: PrismaClient) =>
  ({ request }: YogaInitialContext): Context => ({
    db,
    getCurrentUser: async () => await getCurrentUser({ db, request }),
  })
