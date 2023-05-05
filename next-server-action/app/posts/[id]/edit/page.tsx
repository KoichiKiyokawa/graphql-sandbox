import { postService } from "@/features/post/service"
import { redirect } from "next/navigation"
import { SubmitButton } from "./components/submit-button"

async function action(formData: FormData) {
  "use server"

  const { id, title, content } = Object.fromEntries(formData.entries()) as {
    id: string
    title: string
    content: string
  }

  await postService.update(id, {
    title,
    content,
  })
  redirect(`/posts/${id}`)
}

export default async function PostEditPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await postService.findById(params.id)
  if (!res.success) return <div>something wrong</div>

  const post = res.data
  if (post === null) return <div>404 not found</div>

  return (
    <div className="container mx-auto mt-4">
      <form action={action} className="space-y-4">
        <input type="hidden" name="id" value={params.id} />

        <label className="block">
          <span className="block">title</span>
          <input
            type="text"
            name="title"
            defaultValue={post.title}
            className="w-full text-black px-2"
          />
        </label>

        <label className="block w-full">
          <span className="block">content</span>
          <textarea
            name="content"
            defaultValue={post.content}
            className="w-full min-h-[10rem] text-black px-2"
          />
        </label>

        <SubmitButton />
      </form>
    </div>
  )
}
