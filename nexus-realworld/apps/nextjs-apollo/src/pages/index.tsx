import { useGetArticlesQuery } from "../generated/graphql"
import { getNodes } from "@nexus-realworld/frontend-utils"

export default function Index() {
  const { data } = useGetArticlesQuery()
  if (data === undefined) return <span>Loading...</span>

  return getNodes(data.articles).map((article) => (
    <div key={article.slug}>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>{article.body}</p>
    </div>
  ))
}
