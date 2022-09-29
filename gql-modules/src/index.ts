import { createServer } from "@graphql-yoga/node"
import { useGraphQLModules } from "@envelop/graphql-modules"
import { db } from "./lib/db"
import { createApplication } from "graphql-modules"
import { UserModule } from "./modules/user/module"

const application = createApplication({
  modules: [UserModule],
})

const server = createServer({
  context: () => ({ db }),
  plugins: [useGraphQLModules(application)],
})

server.start().then(() => {
  console.log(`🚀 Server ready`)
})
