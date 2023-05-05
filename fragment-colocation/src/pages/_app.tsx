import type { AppProps } from "next/app"
import { Client, Provider, cacheExchange, fetchExchange } from "urql"

const client = new Client({
  url: "http://localhost:3000/api/graphql",
  exchanges: [fetchExchange, cacheExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
