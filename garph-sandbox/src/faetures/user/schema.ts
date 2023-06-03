import { g } from "garph"

const userType = g
  .type("User", { id: g.string(), name: g.string() })
  .description("A user")

export const queryType = g.type("Query", {
  user: g
    .ref(userType)
    .args({ id: g.string() })
    .description("fetch a user by id"),
  users: g.ref(userType).list().description("fetch all users"),
})
