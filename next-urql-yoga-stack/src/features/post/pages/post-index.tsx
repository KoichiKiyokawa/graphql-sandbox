import { usePaginationState } from "@/features/core/hooks/use-pagination-state"
import { graphql } from "@/gql"
import { useMutation, useQuery } from "urql"
import * as R from "remeda"

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
  const { page, goNext } = usePaginationState()
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
        {R.range(0, page + 1).map((i) => (
          <PostCell
            key={i}
            page={i}
            isLastPage={i === page}
            loadMore={goNext}
          />
        ))}
      </ul>
    </div>
  )
}

const GetPostsQuery = graphql(/* GraphQL */ `
  query GetPosts($per: Int!, $page: Int!) {
    posts(per: $per, page: $page) {
      id
      title
      content
    }
  }
`)

const per = 10

const PostCell: React.FC<{
  page: number
  isLastPage: boolean
  loadMore: () => void
}> = ({ page, isLastPage, loadMore }) => {
  const [{ data }] = useQuery({
    query: GetPostsQuery,
    variables: { per, page },
  })

  if (data === undefined) return <span>Loading...</span>

  const hasReachedEnd = data?.posts.length === 0

  return (
    <>
      {data.posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <pre>{post.content}</pre>
        </li>
      ))}
      {isLastPage && !hasReachedEnd && (
        <button onClick={loadMore}>load more</button>
      )}
    </>
  )
}
