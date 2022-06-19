import { FindAccountQuery, FindAccountQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import AccountCard from '../AccountCard/AccountCard'

export const QUERY = gql`
  query FindAccountQuery($id: Int!) {
    account(id: $id) {
      id
      username
      displayName
      header
      avatar
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAccountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  account,
}: CellSuccessProps<FindAccountQuery, FindAccountQueryVariables>) => {
  return <AccountCard data={account} />
}
