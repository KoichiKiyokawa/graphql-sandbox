import { defineConfig } from "vitest/config"
import { resolve } from "path"
const packageJson = require("./package.json")

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("./src"),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "fs",
        "process",
        "module",
        "path",
        "node:http",
        ...Object.keys(packageJson.dependencies || {}),
      ],
    },
  },
  plugins: [
    {
      name: "gql-loader",
      transform(src, id) {
        if (id.endsWith(".gql")) {
          return {
            code: `export default ${JSON.stringify(src)}`,
            map: null,
          }
        }
      },
    },
  ],
  test: {
    globals: true,
  },
})
