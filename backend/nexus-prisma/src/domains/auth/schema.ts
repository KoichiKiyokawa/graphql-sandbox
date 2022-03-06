import { nonNull, objectType, stringArg } from "nexus";
import bcrypt from "bcryptjs";
import { MaybeError } from "../core/schema";

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("login", {
      type: MaybeError,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, args, context) {
        const targetUser = await context.prisma.user.findUnique({
          where: { email: args.email },
        });
        const loginErrorMessage = "Login failed";
        if (!targetUser) return { error: loginErrorMessage };

        if (!bcrypt.compareSync(args.password, targetUser.passwordHash))
          return { error: loginErrorMessage };

        return {};
      },
    });
  },
});

export const AuthTypes = [Query];
