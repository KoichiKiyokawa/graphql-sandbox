import { Container } from '@chakra-ui/react'
import { TimelineQuery, TimelineQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TimelineCard from '../TimelineCard'

export const QUERY = gql`
  query TimelineQuery {
    statuses: timelinePublic {
      id
      content
      createAt
      mediaAttachments {
        id
        url
      }
      account {
        username
        avatar
        displayName
      }
    }
  }
`

export { default as Loading } from 'src/components/Core/Loading'

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<TimelineQuery>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  statuses,
}: CellSuccessProps<TimelineQuery, TimelineQueryVariables>) => {
  return (
    <Container>
      {statuses.map((status) => (
        <TimelineCard data={status} key={status.id} />
      ))}
    </Container>
  )
}
