import { withMockDB } from "@/test/db"
import { getPostServiceForTest } from "./service"
import { Post } from "@prisma/client"
import { assertTrue } from "@/test/assert"

describe("findAll", () => {
  it("should return all posts", async () => {
    return withMockDB(async (db) => {
      await db.post.create({
        data: { title: "post-title-1", content: "post-content-1" },
      })
      await db.post.create({
        data: { title: "post-title-2", content: "post-content-2" },
      })
      await db.post.create({
        data: { title: "post-title-3", content: "post-content-3" },
      })

      const postService = getPostServiceForTest(db)
      const result = await postService.findAll()

      assertTrue(result.success)
      expect(result.data).toStrictEqual([
        {
          id: expect.any(String),
          title: "post-title-1",
          content: "post-content-1",
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
        {
          id: expect.any(String),
          title: "post-title-2",
          content: "post-content-2",
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
        {
          id: expect.any(String),
          title: "post-title-3",
          content: "post-content-3",
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ] satisfies Post[])
    })
  })

  it("return empty array when there is no post", async () => {
    return withMockDB(async (db) => {
      const postService = getPostServiceForTest(db)
      const result = await postService.findAll()

      assertTrue(result.success)
      expect(result.data).toStrictEqual([])
    })
  })
})

describe("findById", () => {
  it("should return a specific post", async () => {
    return withMockDB(async (db) => {
      await db.post.create({
        data: { id: "1", title: "post-title-1", content: "post-content-1" },
      })
      await db.post.create({
        data: { id: "2", title: "post-title-2", content: "post-content-2" },
      })
      await db.post.create({
        data: { id: "3", title: "post-title-3", content: "post-content-3" },
      })

      const postService = getPostServiceForTest(db)
      const result = await postService.findById("1")

      assertTrue(result.success)
      expect(result.data).toStrictEqual({
        id: expect.any(String),
        title: "post-title-1",
        content: "post-content-1",
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      } satisfies Post)
    })
  })

  it("return null when there is no specific post", async () => {
    return withMockDB(async (db) => {
      await db.post.create({
        data: { id: "1", title: "post-title-1", content: "post-content-1" },
      })

      const postService = getPostServiceForTest(db)
      const result = await postService.findById("2")

      assertTrue(result.success)
      expect(result.data).toBeNull()
    })
  })
})
