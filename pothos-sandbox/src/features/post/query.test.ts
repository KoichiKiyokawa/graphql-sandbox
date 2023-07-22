import { createGqlTestFetcher, withTransaction } from "@/test/util";
import { expect, test } from "vitest";

test("query posts", () =>
  withTransaction(async (db) => {
    await db.user.create({
      data: {
        id: "user1",
        name: "user1",
        email: "user1@example.com",
        password: "password",
        Post: { create: { id: "post1", title: "title1", content: "content1", published: true } },
      },
    });
    await db.user.create({
      data: {
        id: "user2",
        name: "user2",
        email: "user2@example.com",
        password: "password",
        Post: { create: { id: "post2", title: "title2", content: "content2", published: true } },
      },
    });
    const fetcher = createGqlTestFetcher({ db });

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
        "data": {
          "posts": [
            {
              "author": {
                "id": "user1",
                "name": "user1",
              },
              "content": "content1",
              "id": "post1",
              "published": true,
              "title": "title1",
            },
            {
              "author": {
                "id": "user2",
                "name": "user2",
              },
              "content": "content2",
              "id": "post2",
              "published": true,
              "title": "title2",
            },
          ],
        },
      }
    `);
  }));

test("query post", () =>
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
