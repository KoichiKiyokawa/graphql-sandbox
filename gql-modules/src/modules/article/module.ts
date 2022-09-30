import { loadFilesSync } from "@graphql-tools/load-files"
import { join } from "path"
import { createModule } from "graphql-modules"
import { resolvers } from "./resolvers"

export const ArticleModule = createModule({
  id: "article",
  typeDefs: loadFilesSync(join(__dirname, "./typedefs/*.gql")),
  resolvers,
})
