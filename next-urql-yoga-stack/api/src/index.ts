import { createYoga, createSchema } from "graphql-yoga"
import CommonSchema from "@project/schemas/common.sdl"
import PostSchema from "@project/schemas/post.sdl"
import CommentSchema from "@project/schemas/comment.sdl"
import { PostResolver } from "./features/post/resolver"
import { context } from "./features/core/context"

const schema = createSchema<any>({
  typeDefs: [CommonSchema, PostSchema, CommentSchema],
  resolvers: [PostResolver],
})

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
  context,
})
