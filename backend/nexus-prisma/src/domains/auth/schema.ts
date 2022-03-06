import { nonNull, objectType, stringArg } from "nexus"

const LoginResponse = objectType({
  name: "LoginResponse",
  definition(t) {
    t.string("message")
  },
})

export const AuthQuery = objectType({
  name: "Query",
  definition(t) {
    t.field("login", {
      type: LoginResponse,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return { message: "ok" }
      },
    })
  },
})

export const AuthTypes = [LoginResponse, AuthQuery]
