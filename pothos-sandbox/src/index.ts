import { db } from "@/lib/db";
import { serve } from "@hono/node-server";
import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { YogaInitialContext, createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { Context, createContext } from "./context";
import { schema } from "./schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga<YogaInitialContext & Context>({
  schema,
  context: createContext(db),
  plugins: [useCookies],
});

const app = new Hono();

app.mount(yoga.graphqlEndpoint, yoga.handle);

app.get("/health", (c) =>
  db.$queryRaw`SELECT 1`.then(() => c.json({ message: "ok" })).catch(() => c.json({ message: "error" }, 500)),
);

serve({ ...app, port: 4000 });
console.log(`🚀 Server ready at http://localhost:4000${yoga.graphqlEndpoint}`);
