import { nonNull, objectType, stringArg } from "nexus"
import bcrypt from "bcryptjs"

const LoginResponse = objectType({
  name: "LoginResponse",
  definition(t) {
    t.string("error")
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
      async resolve(_parent, args, context) {
        const targetUser = await context.prisma.user.findUnique({
          where: { email: args.email },
        })
        const loginErrorMessage = "Login failed"
        if (!targetUser) return { error: loginErrorMessage }

        if (!bcrypt.compareSync(args.password, targetUser.passwordHash))
          return { error: loginErrorMessage }

        return {}
      },
    })
  },
})

export const AuthTypes = [LoginResponse, AuthQuery]
