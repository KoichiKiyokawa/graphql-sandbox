import CurrentUser from "@/features/user/components/current-user"
import { graphql } from "@/gql"
import { useQuery } from "urql"

const query = graphql(/* GraphQL */ `
  query FetchCurrentUser {
    me {
      ...CurrentUser
      posts {
        id
        title
      }
    }
  }
`)

export default function Home() {
  const [{ data }] = useQuery({ query })
  if (data === undefined) return null

  return (
    <div>
      {data.me === null ? (
        <div>Not logged in</div>
      ) : (
        <CurrentUser data={data.me} />
      )}
    </div>
  )
}
