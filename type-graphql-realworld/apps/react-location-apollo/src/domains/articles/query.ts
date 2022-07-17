import { gql } from "@apollo/client"
import {
  CreateArticleMutation,
  CreateArticleMutationVariables,
  GetArticleQuery,
  GetArticleQueryVariables,
  GetArticlesQuery,
} from "../../generated"
import { client } from "../core/graphql"

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      slug
      title
      body
      authorId
    }
  }
`

const GET_ARTICLE = gql`
  query GetArticle($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      slug
      title
      body
    }
  }
`

const CREATE_ARTICLE = gql`
  mutation CreateOneArticle($input: ArticleCreateInput!) {
    createOneArticle(data: $input) {
      slug
    }
  }
`

export async function getArticles() {
  const { data } = await client.query<GetArticlesQuery>({ query: GET_ARTICLES })
  return data
}

export async function getArticleBySlug(slug: string) {
  const { data } = await client.query<
    GetArticleQuery,
    GetArticleQueryVariables
  >({ query: GET_ARTICLE, variables: { where: { slug } } })
  return data
}

export async function createArticle(
  input: CreateArticleMutationVariables["input"]
) {
  const { data } = await client.mutate<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >({
    mutation: CREATE_ARTICLE,
    variables: { input },
  })
  return data
}
