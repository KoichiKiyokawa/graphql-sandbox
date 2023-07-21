import { createGqlFetcher, withTransaction } from "@/test/util";
import { expect, test } from "vitest";

test("query posts", () =>
  withTransaction(async (db) => {
    await db.user.create({ data: { id: "user1", name: "user1", email: "user1@example.com", password: "password" } });
    await db.user.create({ data: { id: "user2", name: "user2", email: "user2@example.com", password: "password" } });
    await db.post.create({
      data: { id: "post1", title: "title1", content: "content1", published: true, authorId: "user1" },
    });
    await db.post.create({
      data: { id: "post2", title: "title2", content: "content2", published: true, authorId: "user2" },
    });

    const fetcher = createGqlFetcher({ db });

    const res = await fetcher(/* GraphQL */ `
      query GetPosts {
        posts {
          id
          title
          content
          published
          author {
            id
            name
          }
        }
      }
    `);

    expect(res).toMatchInlineSnapshot(`
      {
        "errors": [
          {
            "extensions": {},
            "message": "Unexpected error.",
          },
        ],
      }
    `);
  }));
