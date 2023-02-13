import { type CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "schemas/**/*.ts",
  documents: ["src/**/*.tsx", "!src/gql/**/*"],
  generates: {
    // for frontend
    "./src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
    // for server
    "./src/gql/resolver.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        defaultMapper: "Partial<{T}>",
        contextType: "../features/core/context#Context",
      },
    },
  },
}

export default config
