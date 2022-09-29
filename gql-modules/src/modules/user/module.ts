import { createModule } from "graphql-modules"
import { resolvers } from "./resolver"
import { loadFilesSync } from "@graphql-tools/load-files"

export const UserModule = createModule({
  id: "user",
  typeDefs: loadFilesSync("./typedefs/*.gql"),
  resolvers,
})
