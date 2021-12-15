import React, { useState } from "react"
import { Link, useMatch } from "react-location"
import { ArticleCreateInput } from "../../../generated"
import { LocationGenerics } from "../../../type"
import { createArticle } from "../../articles/query"

export const Index = () => {
  const { data } = useMatch<LocationGenerics>()
  const [form, setForm] = useState({} as ArticleCreateInput)
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createArticle({
      ...form,
      author: { connect: { id: data.articles?.[0].authorId } },
    })
    setForm({} as any)
  }

  return (
    <>
      <h1>home</h1>
      <form onSubmit={onSubmit} className="border rounded p-2 mx-4 space-y-2">
        <label className="block">
          <div>title</div>
          <input name="title" className="border" onChange={handleFormChange} />
        </label>
        <label className="block">
          <div>body</div>
          <textarea
            name="body"
            className="border"
            onChange={handleFormChange}
          />
        </label>
        <button className="bg-blue-400 p-2 text-white">submit</button>
      </form>

      <h2>article list</h2>
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
