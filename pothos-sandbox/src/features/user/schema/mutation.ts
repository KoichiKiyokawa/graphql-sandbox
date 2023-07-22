import { builder } from "@/lib/builder";
import { User } from "./object";

const createUserInput = builder.inputType("CreateUserInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    password: t.string({ required: true }),
  }),
});

builder.mutationField("createUser", (t) =>
  t.field({
    type: User,
    args: {
      input: t.arg({ type: createUserInput, required: true }),
    },
    resolve: (_parent, args, ctx) => {
      return ctx.db.user.create({ data: args.input });
    },
  }),
);
