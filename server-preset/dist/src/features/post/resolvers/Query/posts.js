export const posts = async (_parent, _arg, ctx) => {
    return ctx.db.post.findMany();
};
