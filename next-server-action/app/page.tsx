import { postService } from "@/features/post/service"
import Link from "next/link"

export default async function Home() {
  const result = await postService.findAll()

  return (
    <div className="container mx-auto mt-4">
      {!result.success ? (
        <div>something wrong</div>
      ) : (
        <div className="space-y-4">
          {result.data.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block p-2 border border-white"
            >
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
