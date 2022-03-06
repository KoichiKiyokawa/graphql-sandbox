import { objectType } from "nexus"

export const MaybeError = objectType({
  name: "MaybeError",
  definition(t) {
    t.string("error", { description: "Error message" })
  },
})

export const CoreTypes = [MaybeError]
