/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  schema: "./schemas/**/*.ts",
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
        useTypeImports: true,
        defaultMapper: "Partial<{T}>",
        contextType: "../features/core/context#Context",
        scalars: {
          DateTime: "Date",
        },
      },
    },
  },
}
