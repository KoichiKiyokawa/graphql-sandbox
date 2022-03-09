import fastify from "fastify";
import mercurius from "mercurius";
import { schema } from "~/root-schema";
const app = fastify();

app.register(mercurius, {
  schema,
  graphiql: process.env.NODE_ENV !== "production",
});

app.listen(4000);
