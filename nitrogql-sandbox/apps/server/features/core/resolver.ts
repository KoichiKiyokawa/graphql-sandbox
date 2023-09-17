import { Resolvers } from "@/generated/resolvers";
import { Context } from "./context";

export const coreResolvers = {
  Query: {
    health() {
      return "ok";
    },
  },
} satisfies Resolvers<Context>;
