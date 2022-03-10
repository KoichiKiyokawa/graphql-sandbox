import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  minify: true,
  sourcemap: true,
  outdir: "dist",
  // FIXME: cannot bundle graphql because of hoisting
  external: ["graphql"],
}).then(() => {
  console.log("\n📦️ Build finished!!!");
});
