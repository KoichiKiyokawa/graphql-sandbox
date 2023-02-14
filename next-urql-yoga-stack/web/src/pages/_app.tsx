import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { withUrqlClient } from "next-urql"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withUrqlClient(
  () => ({ url: "http://localhost:3000/api/graphql" }),
  { ssr: true }
)(App)
