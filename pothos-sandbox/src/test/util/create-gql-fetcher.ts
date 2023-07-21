import { schema } from "@/schema";
import { Context } from "@/types/context";
import { createYoga } from "graphql-yoga";

export function createGqlFetcher(context: Context) {
  const yoga = createYoga({ schema, context });

  const fetcher = async (query: string) => {
    const res = await yoga.fetch("http://localhost:4000/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    return await res.json();
  };

  return fetcher;
}
