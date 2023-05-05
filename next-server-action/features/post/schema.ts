import { z } from "zod"

export const updatePostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1).max(65535),
})
