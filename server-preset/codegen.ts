import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "src/features": defineConfig({
      typesPluginsConfig: {
        contextType: "../context#GraphQLContext",
        strictScalars: true,
      },
    }),
  },
  hooks: { afterOneFileWrite: ["prettier --write"] },
};
export default config;
