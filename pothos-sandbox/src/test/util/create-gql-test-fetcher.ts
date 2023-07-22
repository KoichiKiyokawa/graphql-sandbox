import { schema } from "@/schema";
import { Context } from "@/types/context";
import { createYoga } from "graphql-yoga";

export function createGqlTestFetcher(context: Partial<Context>) {
  const yoga = createYoga({ schema, context });

  const fetcher = async (query: string, variables = {}) => {
    const res = await yoga.fetch("http://localhost:4000/graphql", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    return await res.json();
  };

  return fetcher;
}
