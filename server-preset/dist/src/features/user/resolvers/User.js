export const User = {
    posts: async (parent, _args, ctx) => {
        return ctx.db.user
            .findUniqueOrThrow({ where: { id: parent.id.toString() } })
            .posts();
    },
};
