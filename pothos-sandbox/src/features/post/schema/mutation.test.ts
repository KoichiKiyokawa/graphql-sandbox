import { createGqlTestFetcher, withTransaction } from "@/test/util";
import { expect, test } from "vitest";

test("create post", () =>
  withTransaction(async (db) => {
    const user = await db.user.create({
      data: {
        id: "user1",
        name: "user1",
        email: "user1@example.com",
        password: "password",
      },
    });
    const fetcher = createGqlTestFetcher({
      db,
      getCurrentUser: async () => user,
    });

    const res = await fetcher(/* GraphQL */ `
      mutation CreatePost {
        createPost(input: { title: "title1", content: "content1" }) {
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

    expect(res).toMatchObject({
      data: {
        createPost: {
          author: {
            id: "user1",
            name: "user1",
          },
          content: "content1",
          id: expect.any(String),
          published: false,
          title: "title1",
        },
      },
    });
  }));
