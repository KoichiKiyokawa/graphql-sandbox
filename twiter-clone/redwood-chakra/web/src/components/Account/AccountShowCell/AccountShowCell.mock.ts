import { FindAccountQuery, FindAccountQueryVariables } from 'types/graphql'

import { CellSuccessProps } from '@redwoodjs/web'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): CellSuccessProps<
  FindAccountQuery,
  FindAccountQueryVariables
> => ({
  account: {
    id: 0,
    username: 'user',
    displayName: 'User',
    avatar: 'https://placehold.jp/150x150.png',
    header: 'https://placehold.jp/1300x150.png',
    note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolores praesentium minus iste. Quasi rem nemo fugit repellendus iure esse modi repellat. Tempore sed quisquam at id qui quo laborum.',
  },
})
