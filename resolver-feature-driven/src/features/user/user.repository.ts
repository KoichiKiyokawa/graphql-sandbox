import type { User } from "@prisma/client"
import { BaseRepository } from "~/features/core/base.repository"
import type { CreateUserInput } from "../_generated"

class UserRepository extends BaseRepository {
  findAll(): Promise<User[]> {
    return this.db.user.findMany()
  }

  findById(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } })
  }

  create(input: CreateUserInput) {
    return this.db.user.create({ data: input })
  }
}

export const userRepository = new UserRepository()

export const getUserRepositoryForTest = UserRepository.getInstanceForTest
