import { BaseRepository } from "../core/base.repository"

class PostRepository extends BaseRepository {
  findPostsByUserId(userId: string) {
    return this.db.user.findUniqueOrThrow({ where: { id: userId } }).posts()
  }
}

export const postRepository = new PostRepository()

export const getPostRepositoryForTest = PostRepository.getInstanceForTest
