import { InferResolversStrict } from "garph"
import { fieldResolver, queryType } from "./schema"

export const userResolver: InferResolversStrict<
  { Query: typeof queryType },
  {}
> = {
  Query: {
    user(parent, args, ctx) {
      return { id: "1", name: "John" }
    },
    users(parent, args, ctx) {
      return [
        { id: "1", name: "John" },
        { id: "2", name: "Jane" },
      ]
    },
  },
}
