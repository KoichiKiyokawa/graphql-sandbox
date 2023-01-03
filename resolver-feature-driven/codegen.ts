import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "src/features/**/*.gql",
  generates: {
    "src/features/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "_generated.ts",
        filename: "_generated.ts",
        useGraphQLModules: false,
      },
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        resolverTypeWrapperSignature: "Promise<Partial<T>> | Partial<T>",
        useTypeImports: true,
      },
    },
  },
}

export default config
