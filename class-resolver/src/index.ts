import { createSchema, createYoga } from "graphql-yoga"
import { createServer } from "node:http"

class HelloQuery {
  hello() {
    return "Hello from Yoga!"
  }
}

const mergeResolverClasses = (classes: any[]) => {
  const resolvers = {}
  classes.forEach((cls) => {
    const methods = Object.getOwnPropertyNames(cls.prototype)
    for (const method of methods) {
      if (method === "constructor") {
        continue
      }

      const instance = new cls()
      resolvers[method] = instance[method]
    }
  })

  return resolvers
}

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: { Query: mergeResolverClasses([HelloQuery]) },
  }),
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
