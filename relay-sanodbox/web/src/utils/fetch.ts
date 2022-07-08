import { API_URL } from "../env"

async function fetchGraphQL(
  text: string | undefined | null,
  variables: unknown
) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  // Get the response as JSON
  return await response.json()
}

export default fetchGraphQL
