import { createServer } from "@graphql-yoga/node";
import SchemaBuilder from "@pothos/core";

const builder = new SchemaBuilder({});

class User {
  id!: string;
  name!: string;
  email!: string;
}

builder.objectType(User, {
  name: "User",
  description: "User",
  fields: () => ({}),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: User,
      resolve() {
        return new User();
      },
    }),
  }),
});

const server = createServer({
  schema: builder.toSchema({}),
});

server.start();
