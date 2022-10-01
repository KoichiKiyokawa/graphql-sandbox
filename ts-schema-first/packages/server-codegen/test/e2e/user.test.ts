import { db } from "~/lib/db"
import { fixedDate, gqlRequest, resetDbBeforeEach, setupServer } from "../utils"

const insertMockUsers = () =>
  Promise.all(
    [1, 2].map((i) =>
      db.user.create({
        data: {
          id: i.toString(),
          name: `user${i}`,
          email: `user${i}@example.com`,
          createdAt: fixedDate,
          updatedAt: fixedDate,
          posts: {
            create: [
              {
                id: `user${i}-post`,
                title: `user${i}-title`,
                content: `user${i}-content`,
                createdAt: fixedDate,
                updatedAt: fixedDate,
              },
            ],
          },
        },
      })
    )
  )

describe("user", () => {
  setupServer()
  resetDbBeforeEach()

  it("Query.user (with posts field)", async () => {
    const [firstUser] = await insertMockUsers()
    const result = await gqlRequest(
      `
        query GetUser($id: ID!) {
          user(id: $id) { id name email createdAt updatedAt posts { id title content createdAt updatedAt } }
        }
      `,
      { id: firstUser.id }
    )
    expect(result).toMatchSnapshot()
  })

  it("Query.users (with posts field)", async () => {
    await insertMockUsers()
    const result = await gqlRequest(
      `
        query GetUsers {
          users { id name email createdAt updatedAt posts { id title content createdAt updatedAt } }
        }
      `
    )
    expect(result).toMatchSnapshot()
  })
})
