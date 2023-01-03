import { userRepository } from "./user.repository"
import { userService } from "./user.service"

describe("UserService", () => {
  it("findAll", async () => {
    vi.spyOn(userRepository, "findAll").mockImplementation(async () => [
      { id: "1", name: "Alice", email: "alice@example.com" },
    ])
    expect(await userService.findAll()).toStrictEqual([
      { id: "1", name: "Alice", email: "alice@example.com" },
    ])
  })
})
