import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { User } from "src/domains/user/schema";

export const Article = objectType({
  name: "Article",
  definition(t) {
    t.nonNull.string("slug", {
      description: "The unique slug for the article",
    });
    t.nonNull.string("title", { description: "The title of the article" });
    t.nonNull.string("description", {
      description: "The description of the article",
    });
    t.nonNull.string("body");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("updatedAt", { type: "DateTime" });

    t.nonNull.field("author", {
      type: User,
      description: "The author of the article",
      async resolve({ slug }, _args, context) {
        const author = await context.prisma.article
          .findUnique({ where: { slug } })
          .author();

        if (!author) throw Error("Author not found");

        return author;
      },
    });
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("article", {
      type: Article.name,
      args: {
        slug: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.article.findUnique({
          where: { slug: args.slug },
        });
      },
    });
    t.list.field("articles", {
      type: Article.name,
      args: {
        first: intArg(),
      },
      resolve(_parent, args, context) {
        return context.prisma.article.findMany({
          take: args.first ?? undefined,
        });
      },
    });
  },
});
