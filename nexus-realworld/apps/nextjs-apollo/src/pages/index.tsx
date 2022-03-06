import { useGetArticlesQuery } from "../generated/graphql"

export default function Index() {
  const { data } = useGetArticlesQuery()
  if (data === undefined) return <span>Loading...</span>

  return data.articles.map((article) => (
    <div key={article.slug}>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>{article.body}</p>
    </div>
  ))
}
