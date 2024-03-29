import { createModule } from "graphql-modules"
import { resolvers } from "./resolvers"
import { loadFilesSync } from "@graphql-tools/load-files"
import { join } from "path"

export const UserModule = createModule({
  id: "user",
  typeDefs: loadFilesSync(join(__dirname, "./typedefs/*.gql")),
  resolvers,
  dirname: __dirname,
})
