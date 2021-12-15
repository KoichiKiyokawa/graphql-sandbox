import { useMatch } from "react-location"
import { LocationGenerics } from "../../../type"

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
