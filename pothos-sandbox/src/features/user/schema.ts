import { builder } from "../../lib/builder";

export const User = builder.simpleObject("User", {
  description: "A user of this service",
  fields: (t) => ({
    id: t.id(),
    name: t.string(),
  }),
});

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

const createUserInput = builder.inputType("CreateUserInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    password: t.string({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  createUser: t.field({
    type: User,
    args: {
      input: t.arg({ type: createUserInput, required: true }),
    },
    resolve: (_parent, args, ctx) => {
      return ctx.db.user.create({ data: args.input });
    },
  }),
}));
