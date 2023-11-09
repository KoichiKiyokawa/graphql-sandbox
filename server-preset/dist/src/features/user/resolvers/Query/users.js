export const users = async (_parent, _arg, ctx) => {
    console.log(ctx.db);
    return ctx.db.user.findMany();
};
