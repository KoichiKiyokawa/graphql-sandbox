export const user = async (_parent, arg, ctx) => {
    return ctx.db.user.findUniqueOrThrow({ where: { id: arg.id } });
};
