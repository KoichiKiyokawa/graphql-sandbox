import { type PrismaClient } from '@prisma/client'
import { type YogaInitialContext } from 'graphql-yoga'

export interface ServiceContext {
  db: PrismaClient
  request: YogaInitialContext['request']
}
