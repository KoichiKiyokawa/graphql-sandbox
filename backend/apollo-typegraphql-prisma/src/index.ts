import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { resolvers } from "@generated/type-graphql"
import { buildSchema } from "type-graphql"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function bootstrap() {
  const schema = await buildSchema({ resolvers })
  const server = new ApolloServer({ schema, context: () => ({ prisma }) })
  const { url } = await server.listen(8080)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
