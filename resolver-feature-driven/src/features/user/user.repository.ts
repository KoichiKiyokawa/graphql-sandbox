import { BaseRepository } from "~/features/core/base.repository"
import type { CreateUserInput } from "../_generated"

class UserRepository extends BaseRepository {
  findAll() {
    return this.db.user.findMany()
  }

  findById(id: string) {
    return this.db.user.findUnique({ where: { id } })
  }

  create(input: CreateUserInput) {
    return this.db.user.create({ data: input })
  }
}

export const userRepository = new UserRepository()

export const getUserRepositoryForTest = UserRepository.getInstanceForTest
