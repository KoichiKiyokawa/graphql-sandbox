// custom-plugin.ts
import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers"
import { GraphQLSchema, isObjectType, isScalarType } from "graphql"

const CustomPlugin: PluginFunction = async (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: any,
  info: any
) => {
  const output: string[] = []

  const generateTypes = (type: string, properties: string[]) => {
    output.push(`export type ${type} {`)
    properties.forEach((property) => {
      output.push(`  ${property}`)
    })
    output.push("}\n")
  }

  const types = schema.getTypeMap()

  for (const typeName in types) {
    const type = types[typeName]

    if (isObjectType(type) && !typeName.startsWith("__")) {
      const typeProperties = type.getFields()
      const properties: string[] = []

      for (const field in typeProperties) {
        const fieldObj = typeProperties[field]
        const fieldType = fieldObj.type

        if (isScalarType(fieldType)) {
          properties.push(`${field}: ${fieldType.name}`)
        } else {
          properties.push(
            `${field}: ${fieldType.name}${fieldType.ofType ? "[]" : ""}`
          )
        }
      }

      generateTypes(typeName, properties)

      if (typeName !== "Query" && typeName !== "Mutation") {
        const resolverProperties = [
          `${typeName}: {`,
          ...Object.keys(typeProperties)
            .filter(
              (fieldName) => !isScalarType(typeProperties[fieldName].type)
            )
            .map(
              (fieldName) =>
                `  ${fieldName}(): ${typeProperties[fieldName].type.name}${
                  typeProperties[fieldName].type.ofType ? "[]" : ""
                }`
            ),
          "}",
        ]

        if (resolverProperties.length > 2) {
          generateTypes(`${typeName}Resolver`, resolverProperties)
        }
      }
    }
  }

  return output.join("\n")
}

export default CustomPlugin
