import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/modules/**/typedefs/*.gql",
  generates: {
    "./src/modules/": {
      preset: "graphql-modules",
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
      config: {
        contextType: "GraphQLModules.Context",
        resolverTypeWrapperSignature:
          "T | Promise<T> | Partial<T> | Promise<Partial<T>>",
      },
    },
  },
}

export default config
