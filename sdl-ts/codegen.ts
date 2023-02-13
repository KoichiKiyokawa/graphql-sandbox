import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: [{ "./schemas/**/*.ts": { noPluck: true } }],
  generates: {
    "./src/__graphql.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
}
export default config
