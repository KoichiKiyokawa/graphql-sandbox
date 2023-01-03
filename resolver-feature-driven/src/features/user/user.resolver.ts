import { postRepository } from "../post/post.respository"
import type { Resolvers } from "../_generated"
import { userService } from "./user.service"

export const resolvers: Resolvers = {
  Query: {
    users() {
      return userService.findAll()
    },
    user(_, { id }) {
      return userService.findById(id)
    },
  },
  Mutation: {
    createUser(_, { input }) {
      return userService.create(input)
    },
  },
  User: {
    posts(parent) {
      return postRepository.findPostsByUserId(parent.id)
    },
  },
}
