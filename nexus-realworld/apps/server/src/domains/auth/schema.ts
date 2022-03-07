import { extendType, nonNull, stringArg } from "nexus";
import bcrypt from "bcryptjs";
import { MaybeError } from "~/domains/core/schema";

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("login", {
      type: MaybeError,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const targetUser = await ctx.db.user.findUnique({
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
