import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/modules/**/typedefs/*.gql",
  generates: {
    "./src/modules/": {
      preset: "graphql-modules",
      config: {
        contextType: "GraphQLModules.Context",
      },
      presetConfig: {
        baseTypesPath: "../generated-types/graphql.ts",
        filename: "generated-types/module-types.ts",
      },
      plugins: [
        // {
        //   add: {
        //     content: "/* eslint-disable */",
        //   },
        // },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
}

export default config
