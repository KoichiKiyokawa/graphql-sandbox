import { MetaTags } from '@redwoodjs/web'

import AuthForm from 'src/components/Auth/AuthForm'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <AuthForm pageType="login" />
    </>
  )
}

export default LoginPage
