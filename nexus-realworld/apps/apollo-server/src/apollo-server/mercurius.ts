import fastify from "fastify";
import mercurius from "mercurius";
import { context } from "~/context";
import { schema } from "~/root-schema";
const app = fastify();

const isProd = process.env.NODE_ENV === "production";

app.register(mercurius, {
  schema,
  context: () => context,
  graphiql: !isProd,
  subscription: true,
});

const port = process.env.PORT || 4000;
app.listen(port).then((url) => {
  console.log(`Server listening on port ${port}.`);
  console.log(`GraphiQL is available at ${url}/graphiql`);
});
