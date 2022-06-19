import {
  FindAccountQuery,
  FindAccountQueryVariables,
  FollowSpecificAccount,
  FollowSpecificAccountVariables,
} from 'types/graphql'

import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'

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

const MUTATION = gql`
  mutation FollowSpecificAccount($username: String!) {
    follow(username: $username) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAccountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  account,
}: CellSuccessProps<FindAccountQuery, FindAccountQueryVariables>) => {
  const [follow, { loading }] = useMutation<
    FollowSpecificAccount,
    FollowSpecificAccountVariables
  >(MUTATION)
  if (account == null) return <Empty />

  return (
    <AccountCard
      data={account}
      loading={loading}
      onClickFollow={() => {
        follow({ variables: { username: account.username } })
      }}
    />
  )
}
