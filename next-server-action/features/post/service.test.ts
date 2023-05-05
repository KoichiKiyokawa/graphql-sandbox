import { withMockDB } from "@/test/db"
import { getPostServiceForTest } from "./service"
import { Post } from "@prisma/client"

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

      expect(result).toStrictEqual([
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

      expect(result).toStrictEqual([])
    })
  })
})
