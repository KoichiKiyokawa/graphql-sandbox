import type { CodegenConfig } from "@graphql-codegen/cli"
import { CodeFileLoader } from "@graphql-tools/code-file-loader"
import { loadSchemaSync } from "@graphql-tools/load"
import utils from "@graphql-tools/utils"
import fb from "fast-glob"

const fieldResolversMap = {
  User: ["posts"],
  Post: ["author"],
}

const schemaFiles: string[] = fb.sync("./schemas/*.ts")
const schemesMap: Map<string, any> = new Map(
  schemaFiles.map((path) => [
    stripModuleName(path),
    loadSchemaSync(path, { loaders: [new CodeFileLoader()] }),
  ])
)

export default {
  schema: "./schemas/*.ts",
  generates: {
    "./src/generated/base.ts": {
      schema: "./schemas/*.ts",
      plugins: ["typescript"],
    },
    ...Object.fromEntries(
      schemaFiles.map((path) => {
        const moduleName = stripModuleName(path)
        const schema = [...schemesMap.entries()].map(([name, schema]) => {
          if (name === moduleName) return schema
          return utils.filterSchema({
            schema,
            fieldFilter: (typeName) => {
              console.log(typeName)
              return true
            },
          })
        })

        return [
          `./src/generated/${stripModuleName(path)}.ts`,
          { schema, plugins: ["typescript-resolvers"] },
        ]
      })
    ),
  },
} satisfies CodegenConfig

function stripModuleName(path: string): string {
  return path.match(/.*\/(\w+)\.\w+$/)?.[1] ?? ""
}
