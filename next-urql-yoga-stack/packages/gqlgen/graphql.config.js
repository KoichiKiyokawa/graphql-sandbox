// FIXME: auto complete doesn't work
/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  schema: "../../schemas/**/*.ts",
  documents: ["../../web/src/**/*.tsx", "!../../web/src/gql/**/*"],
  generates: {
    // for frontend
    "../../web/src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
    // for server
    "../../api/src/gql/generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useTypeImports: true,
        useIndexSignature: true,
        resolverTypeWrapperSignature: "Promise<Partial<{T}>> | Partial<T>",
        contextType: "../features/core/context#Context",
        scalars: {
          DateTime: "Date",
        },
      },
    },
  },
}
