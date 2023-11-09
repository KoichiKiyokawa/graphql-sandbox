export const Post = {
    author: async (parent, _args, ctx) => {
        return ctx.db.post
            .findUniqueOrThrow({ where: { id: parent.id.toString() } })
            .user();
    },
};
