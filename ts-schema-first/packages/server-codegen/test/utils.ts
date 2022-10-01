import { loadFilesSync } from "@graphql-tools/load-files"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { createServer } from "@graphql-yoga/node"
import { execSync } from "child_process"
import { request } from "graphql-request"
import { join } from "path"
import { createContext } from "~/context"
import { db } from "~/lib/db"

const PORT = 4040

export const setupServer = () => {
  const context = createContext()

  const server = createServer({
    schema: makeExecutableSchema({
      typeDefs: loadFilesSync("node_modules/@ts-schema-first/schemas/**/*.gql"),
      resolvers: loadFilesSync(
        join(__dirname, "../src/domains/**/*.resolver.{js,ts}")
      ),
    }),
    context,
    port: PORT,
  })

  beforeAll(async () => {
    await server.start()
  })

  afterAll(async () => {
    await context.db.$disconnect()
    await server.stop()
  })
}

export const gqlRequest = (query: string, variables?: Record<string, any>) =>
  request(`http://localhost:${PORT}/graphql`, query, variables)

export const resetDbBeforeEach = () => {
  beforeAll(() => {
    execSync("pnpm prisma db push")
  })

  beforeEach(async () => {
    await db.post.deleteMany()
    await db.user.deleteMany()
  })
}

export const fixedDate = new Date("2000-01-01T00:00:00.000Z")
