import fastify from "fastify";
import mercurius from "mercurius";
import { context } from "~/context";
import { schema } from "~/root-schema";
const app = fastify();

app.register(mercurius, {
  schema,
  context: () => context,
  graphiql: process.env.NODE_ENV !== "production",
  subscription: true,
});

app.listen(4000);
