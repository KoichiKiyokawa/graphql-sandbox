import { gql } from "@apollo/client"
import { useMatch } from "react-location"
import { GetArticleQuery, GetArticleQueryVariables } from "../../../generated"
import { LocationGenerics } from "../../../type"
import { client } from "../../core/graphql"

const GET_ARTICLE = gql`
  query GetArticle($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      slug
      title
      body
    }
  }
`

export async function getArticleBySlug(slug: string) {
  const { data } = await client.query<
    GetArticleQuery,
    GetArticleQueryVariables
  >({ query: GET_ARTICLE, variables: { where: { slug } } })
  return data
}

export const ArticleShow = () => {
  const {
    data: { article },
  } = useMatch<LocationGenerics>()
  return (
    <>
      <h1>article show</h1>
      <p>title: {article?.title}</p>
      <p>body: {article?.body}</p>
    </>
  )
}
