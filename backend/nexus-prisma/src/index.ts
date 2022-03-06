import { ApolloServer } from "apollo-server";
import { context } from "./context";
import { schema } from "./root-schema";

const server = new ApolloServer({
  schema,
  context,
});

server.listen({ port: process.env.PORT || 4000 }).then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `);
});
