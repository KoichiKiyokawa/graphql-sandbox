import { useState } from "react"
import { useQuery } from "urql"
import "./App.css"
import { gql } from "./gql"

const userDocument = gql(`
  query GetUsers {
    users {
      id
      email
    }
  }
`)

function App() {
  const [count, setCount] = useState(0)
  const [{ data, error }] = useQuery({ query: userDocument })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default App
