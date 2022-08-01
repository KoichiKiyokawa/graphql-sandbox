import "reflect-metadata"
import { resolvers } from "@generated/type-graphql"
import { ApolloServer } from "apollo-server-express"
import session from "cookie-session"
import express from "express"
import http from "http"
import { buildSchema } from "type-graphql"
import { customAuthChecker } from "./domains/auth/checker"
import { AuthResolver } from "./domains/auth/resolver"
import { prisma } from "./domains/core/db"
import * as env from "./env"
import cors from "cors"

const isProduction = process.env.NODE_ENV === "production"

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [...resolvers, AuthResolver],
    authChecker: customAuthChecker,
  })

  const app = express()
  // apollo studioでcookieを設定できるようにする https://github.com/apollographql/apollo-server/issues/5775#issuecomment-936896592
  app.set("trust proxy", !isProduction)
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ prisma, req }),
  })
  await server.start()
  app.use(
    session({
      name: "tmp-session",
      keys: [env.SESSION_SECRET],
      secure: true,
      httpOnly: true,
      // apollo studio上でこのサーバーにログインを行うためには'none'にする必要があり，ローカルのフロントエンドからログインするためには'lax'にする必要がある
      sameSite: isProduction ? "lax" : "none",
    })
  )

  const corsOption = {
    credentials: true,
    origin: ["https://studio.apollographql.com", "http://localhost:3000"],
  }
  app.use(cors(corsOption))

  server.applyMiddleware({
    app,
    cors: corsOption,
  })
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4040 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4040${server.graphqlPath}`)
}

bootstrap()
