import { defineConfig } from "vite";
import nitrogql from "@nitrogql/rollup-plugin";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nitrogql({
      include: ["**/*.graphql"],
    }),
  ],
});
