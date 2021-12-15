import { Outlet, ReactLocation, Router } from "react-location"
import { Login } from "./domains/auth/pages/login"
import { Register } from "./domains/auth/pages/register"
import { MainLayout } from "./domains/core/layouts/MainLayout"
import { Index } from "./domains/core/pages"

const location = new ReactLocation()

const App = () => (
  <Router
    location={location}
    routes={[
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Index /> },
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
    ]}
  >
    <Outlet />
  </Router>
)

export default App
