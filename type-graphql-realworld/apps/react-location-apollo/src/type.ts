import { MakeGenerics } from "react-location"
import { GetArticleQuery, GetArticlesQuery } from "./generated"

export type LocationGenerics = MakeGenerics<{
  LoaderData: GetArticlesQuery & GetArticleQuery
}>
