import { gql } from "@apollo/client"
import { Link, useMatch } from "react-location"
import { GetArticlesQuery } from "../../../generated"
import { LocationGenerics } from "../../../type"
import { client } from "../graphql"

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      slug
      title
      body
    }
  }
`

export async function getArticles() {
  const { data } = await client.query<GetArticlesQuery>({ query: GET_ARTICLES })
  return data
}

export const Index = () => {
  const { data } = useMatch<LocationGenerics>()

  return (
    <>
      <h1>home</h1>
      {data.articles?.map((article) => (
        <ul key={article.slug}>
          <li>
            <Link to={"/articles/" + article.slug}>
              <span>title: {article.title}</span>
              <span>body: {article.body}</span>
            </Link>
          </li>
        </ul>
      ))}
    </>
  )
}
