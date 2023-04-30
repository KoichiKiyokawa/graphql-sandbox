import type { CodegenConfig } from "@graphql-codegen/cli"
import path from "path"

const fieldResolversMap = {
  User: ["posts"],
  Post: ["author"],
}

export default {
  schema: "./schemas/*.ts",
  generates: {
    "./schemas/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../src/generated/base.ts",
        filename: "index.ts",
        encapsulateModuleTypes: "none",
        useGraphQLModules: false,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
} satisfies CodegenConfig
