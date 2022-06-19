import { Account } from 'types/graphql'

declare module '@redwoodjs/graphql-server/dist/functions/types' {
  interface RedwoodGraphQLContext {
    currentUser?: Account
  }
}
