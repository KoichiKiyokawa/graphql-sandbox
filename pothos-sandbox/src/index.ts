import { db } from '@/lib/db'
import { useCookies } from '@whatwg-node/server-plugin-cookies'
import { type YogaInitialContext, createYoga, useReadinessCheck } from 'graphql-yoga'
import { createServer } from 'node:http'
import { type Context, createContext } from './context'
import { schema } from './schema'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga<YogaInitialContext & Context>({
  schema,
  context: createContext(db),
  plugins: [
    useCookies,
    useReadinessCheck({
      endpoint: '/ready',
      check: async () => await db.$queryRaw`SELECT 1`,
    }),
  ],
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const server = createServer(yoga)
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})

if (import.meta.hot != null) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    server.close()
  })
}
