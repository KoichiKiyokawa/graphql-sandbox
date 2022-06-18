import { TimelineQuery, TimelineQueryVariables } from 'types/graphql'

import { CellSuccessProps } from '@redwoodjs/web'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): CellSuccessProps<
  TimelineQuery,
  TimelineQueryVariables
> => ({
  statuses: [
    {
      id: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut vero rerum quis asperiores quam nam quo. Ipsa, error dolorem. Facilis voluptates ipsa fuga doloribus mollitia dicta? Expedita, exercitationem omnis?',
      account: {
        username: 'username',
        avatar: 'https://placehold.jp/150x150.png',
        displayName: 'Username',
      },
      createAt: new Date().toISOString(),
      mediaAttachments: [
        { id: 0, url: 'https://placehold.jp/150x150.png' },
        { id: 1, url: 'https://placehold.jp/150x150.png' },
      ],
    },
  ],
})
