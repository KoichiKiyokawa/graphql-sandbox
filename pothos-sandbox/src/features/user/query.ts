import { builder } from "@/lib/builder";
import { User } from "./object";

builder.queryFields((t) => ({
  users: t.field({
    type: [User],
    description: "get all users",
    resolve: (_parent, _args, ctx) => {
      return ctx.db.user.findMany();
    },
  }),

  user: t.field({
    type: User,
    description: "get a specific user",
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (_parent, args, ctx) => {
      return ctx.db.user.findUnique({ where: { id: args.id } });
    },
  }),
}));
