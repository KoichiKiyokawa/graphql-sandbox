import type { CreateUserInput } from "../_generated"
import { userRepository } from "./user.repository"

class UserService {
  findAll() {
    return userRepository.findAll()
  }

  findById(id: string) {
    return userRepository.findById(id)
  }

  create(input: CreateUserInput) {
    return userRepository.create(input)
  }
}

export const userService = new UserService()
