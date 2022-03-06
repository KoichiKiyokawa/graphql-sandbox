import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  minify: true,
  sourcemap: true,
  outdir: "dist",
}).then(() => {
  console.log("\n📦️ Build finished!!!");
});

