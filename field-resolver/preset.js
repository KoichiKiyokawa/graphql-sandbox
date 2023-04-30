const path = require("path")

/** @type {import('@graphql-codegen/plugin-helpers').Types.OutputPreset} */
module.exports = {
  buildGeneratesSection({ baseOutputDir, schemaAst, presetConfig }) {
    /** @type {Record<string, string[]>} */
    const { fieldResolversMap } = presetConfig
    const outputs = schemaAst.extensions.sources.map(
      (/** @type {{name: string; body: string}} */ src) => {
        const moduleName = stripModuleName(src.name)
        /** @type {import('@graphql-codegen/plugin-helpers').Types.GenerateOptions} */
        const output = {
          filename: path.join(baseOutputDir, `${moduleName}.ts`),
          schema: src.body,
          plugins: ["typescript-resolvers"],
        }

        return output
      }
    )

    return outputs
  },
}

/** @param {string} path */
function stripModuleName(path) {
  return path.match(/.*\/(\w+)\.\w+$/)?.[1]
}
