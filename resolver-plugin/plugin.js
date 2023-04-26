const { isObjectType } = require("graphql")

/**
 * @type {import('@graphql-codegen/plugin-helpers').CodegenPlugin}
 */
module.exports = {
  plugin(schema) {
    const types = schema.getTypeMap()

    for (const typeName in types) {
      const type = types[typeName]

      if (!isObjectType(type) || typeName.startsWith("__")) continue

      const typeProperties = type.getFields()
      console.log(typeProperties)
    }
  },
  addToSchema: /* GraphQL */ `
    directive @fieldResolver on FIELD_DEFINITION
  `,
}
