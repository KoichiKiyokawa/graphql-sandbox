import { useTransactionalDB } from "@/../test/utils"
import { PostResolver } from "./resolver"

test("posts query", async () => {
  await useTransactionalDB(async (db) => {
    const now = new Date(2000, 1, 1)
    await db.post.create({
      data: {
        id: "id1",
        title: "Post 1",
        content: "Content 1",
        createdAt: now,
        updatedAt: now,
      },
    })
    await db.post.create({
      data: {
        id: "id2",
        title: "Post 2",
        content: "Content 2",
        createdAt: now,
        updatedAt: now,
      },
    })
    expect(await PostResolver.Query.posts({}, {}, { db }))
      .toMatchInlineSnapshot(`
[
  {
    "content": "Content 1",
    "createdAt": 2000-01-31T15:00:00.000Z,
    "id": "id1",
    "title": "Post 1",
    "updatedAt": 2000-01-31T15:00:00.000Z,
  },
  {
    "content": "Content 2",
    "createdAt": 2000-01-31T15:00:00.000Z,
    "id": "id2",
    "title": "Post 2",
    "updatedAt": 2000-01-31T15:00:00.000Z,
  },
]
`)
  })
})

test("createPost mutation", async () => {
  // jest.useFakeTimers({ now: new Date(2000, 1, 1) })
  await useTransactionalDB(async (db) => {
    await PostResolver.Mutation.createPost(
      {},
      { title: "title", content: "content" },
      { db }
    )
    const actualPosts = await db.post.findMany()
    expect(actualPosts).toHaveLength(1)
    expect(actualPosts[0]).toMatchObject({
      title: "title",
      content: "content",
    })
  })
})
