import { Suspense } from "react"
import {
  loadQuery,
  RelayEnvironmentProvider,
  usePaginationFragment,
  usePreloadedQuery,
} from "react-relay/hooks"
import { graphql } from "relay-runtime"
import "./App.css"
import { RelayEnvironment } from "./utils/relay-environment"
import { GetUserWithPostsQuery } from "./__generated__/GetUserWithPostsQuery.graphql"

const UserWithPostsList = graphql`
  fragment AppGetUserWithPostsQuery on User
  @refetchable(queryName: "GetUserWithPostsQuery") {
    name
    posts(first: $count, after: $cursor)
      @connection(key: "UserWithPostsList_user_posts") {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`

function App() {
  const { data } = usePaginationFragment<GetUserWithPostsQuery, any>(
    UserWithPostsList,
    {}
  )

  return <div className="App">{JSON.stringify(data, null, 2)}</div>
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot
