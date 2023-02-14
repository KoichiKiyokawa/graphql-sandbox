import { graphql } from "@/gql"
import { useMutation, useQuery } from "urql"

const GetPostsQuery = graphql(/* GraphQL */ `
  query GetPosts {
    posts {
      id
      title
      content
    }
  }
`)

const CreatePostMutation = graphql(/* GraphQL */ `
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`)

export const PostIndex: React.FC = () => {
  const [{ data }] = useQuery({ query: GetPostsQuery })
  const [mutationState, mutation] = useMutation(CreatePostMutation)
  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target).entries()
    ) as Parameters<typeof mutation>[0]
    mutation(data)
      .then(() => {
        e.target.reset()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          title
          <input name="title" />
        </label>

        <label>
          content
          <textarea name="content" />
        </label>

        <button disabled={mutationState.fetching}>submit</button>
      </form>

      <ul>
        {data?.posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  )
}
