import { ApolloProvider } from "@apollo/client"
import { Outlet, ReactLocation, Router } from "react-location"
import { ArticleShow, getArticleBySlug } from "./domains/articles/pages/Show"
import { Login } from "./domains/auth/pages/login"
import { Register } from "./domains/auth/pages/register"
import { client } from "./domains/core/graphql"
import { MainLayout } from "./domains/core/layouts/MainLayout"
import { getArticles, Index } from "./domains/core/pages/Index"

const location = new ReactLocation()

const App = () => (
  <ApolloProvider client={client}>
    <Router
      location={location}
      routes={[
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <Index />,
              loader: getArticles,
            },
            {
              path: "/articles/:slug",
              element: <ArticleShow />,
              loader: ({ params: { slug } }) => getArticleBySlug(slug),
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
          ],
        },
      ]}
    >
      <Outlet />
    </Router>
  </ApolloProvider>
)

export default App
