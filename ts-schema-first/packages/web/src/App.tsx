import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { gql } from "./gql"
import { useQuery } from "urql"

const userDocument = gql(/* GraphQL */ `
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
