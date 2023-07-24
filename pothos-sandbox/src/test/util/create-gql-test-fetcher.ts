import { schema } from '@/schema'
import { type Context } from '@/context'
import { createYoga } from 'graphql-yoga'

type Fetcher = (query: string, variables?: any) => Promise<any>

export function createGqlTestFetcher(context: Partial<Context>): Fetcher {
  const yoga = createYoga({ schema, context })

  const fetcher: Fetcher = async (query: string, variables = {}) => {
    const res = await yoga.fetch('http://localhost:4000/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    })
    return await res.json()
  }

  return fetcher
}
