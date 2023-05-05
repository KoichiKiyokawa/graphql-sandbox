import { CodegenConfig } from "@graphql-codegen/cli"

export default {
  schema: "http://localhost:3000/api/graphql",
  documents: "src/**/*.{ts,tsx}",
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        avoidOptionals: true,
      },
    },
  },
} satisfies CodegenConfig
