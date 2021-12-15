import { Link, Outlet } from "react-location"

export const MainLayout = () => {
  return (
    <>
      <nav role="navigation">
        <Link to="/">conduit</Link>
        <ul>
          <li>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
