import { builder, db } from "../core/builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
  }),
});

builder.queryType({
  fields: (t) => ({
    user: t.prismaField({
      type: "User",
      args: {
        id: t.arg.string({ required: true }),
      },
      resolve(query, _root, args) {
        return db.user.findUniqueOrThrow({ ...query, where: { id: args.id } });
      },
    }),
  }),
});

export const schema = builder.toSchema({});
