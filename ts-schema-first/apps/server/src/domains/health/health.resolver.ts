import { Resolvers } from "../../__generated"

const resolver: Resolvers = {
  Query: {
    health: () => "ok",
  },
}

export default resolver
