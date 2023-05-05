import { postService } from "@/features/post/service"
import Link from "next/link"

export default async function PostDetail({
  params,
}: {
  params: { id: string }
}) {
  const result = await postService.findById(params.id)

  return (
    <div className="container">
      {(() => {
        if (!result.success) return <p>something wrong</p>

        const post = result.data
        if (post === null) return <p>404 not found</p>

        return (
          <>
            <Link href={`/posts/${params.id}/edit`}>edit</Link>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </>
        )
      })()}
    </div>
  )
}
