import { CodegenConfig } from "@graphql-codegen/cli"

export default {
  schema: "./schemas/**/*.gql",
  generates: {
    "./src/generated": {
      plugins: ["./plugin.js"],
    },
  },
} satisfies CodegenConfig
