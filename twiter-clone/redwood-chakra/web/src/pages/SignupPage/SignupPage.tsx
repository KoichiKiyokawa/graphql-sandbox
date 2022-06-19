import { MetaTags } from '@redwoodjs/web'

import AuthForm from 'src/components/Auth/AuthForm'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <AuthForm pageType="signup" />
    </>
  )
}

export default SignupPage
