import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { babelPlugin } from "@graphql-codegen/gql-tag-operations-preset"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [[babelPlugin, { artifactDirectory: "./src/gql" }]],
      },
    }),
  ],
  build: {
    minify: false,
  },
})
