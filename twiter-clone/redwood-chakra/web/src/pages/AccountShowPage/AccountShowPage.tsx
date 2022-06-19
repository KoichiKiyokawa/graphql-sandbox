import { MetaTags } from '@redwoodjs/web'

import AccountShowCell from 'src/components/Account/AccountShowCell'

type PageProps = {
  id: number
}

const AccountShowPage = ({ id }: PageProps) => {
  return (
    <>
      <MetaTags title="AccountShow" description="AccountShow page" />

      <AccountShowCell id={id} />
    </>
  )
}

export default AccountShowPage
