export const post = async (_parent, arg, ctx) => {
    return ctx.db.post.findUniqueOrThrow({ where: { id: arg.id } });
};
