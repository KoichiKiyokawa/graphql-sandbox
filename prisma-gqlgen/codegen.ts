import { CodegenConfig } from "@graphql-codegen/cli"
import fb from "fast-glob"
import fs from "fs"

const graphqlTypes = (() => {
  const files = fb.sync("schema.graphql")
  const types = files.flatMap((f) =>
    [...fs.readFileSync(f, "utf-8").matchAll(/type (\w+) ?\{/g)].map(
      (m) => m[1]
    )
  )
  return types
})()

const prismaTypes = [
  ...fs
    .readFileSync("prisma/schema.prisma", "utf-8")
    .matchAll(/model (\w+) ?\{/g),
].map((m) => m[1])

export default {
  schema: "schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        {
          add: {
            content: "import * as Prisma from '@prisma/client'",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
      config: {
        mappers: Object.fromEntries(
          graphqlTypes
            .filter((t) => prismaTypes.includes(t))
            .map((model) => [model, `Prisma.${model}`])
        ),
      },
    },
  },
} satisfies CodegenConfig
