// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createYoga, createSchema } from "graphql-yoga"
import type { NextApiRequest, NextApiResponse } from "next"
import PostSchema from "@/../schemas/post.sdl"
import { PostResolver } from "@/features/post/resolver"
import { context } from "@/features/core/context"

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

const schema = createSchema<any>({
  typeDefs: [PostSchema],
  resolvers: [PostResolver],
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
  context,
})
