import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import { Button, Container } from '@chakra-ui/react'
import { TimelineQuery, TimelineQueryVariables } from 'types/graphql'

import { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import TimelineCard from '../TimelineCard'

export const QUERY = gql`
  query TimelineQuery(
    $onlyMedia: Boolean
    $maxId: Int
    $sinceId: Int
    $limit: Int
  ) {
    statuses: timelinePublic(
      onlyMedia: $onlyMedia
      maxId: $maxId
      sinceId: $sinceId
      limit: $limit
    ) {
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
  const [moreStatuses, setMoreStatuses] = useState<TimelineQuery['statuses']>(
    []
  )
  const [noMoreStatuses, setNoMoreStatuses] = useState(false)
  const mergedStatuses = [...statuses, ...moreStatuses]
  const [loadMore, { loading }] = useLazyQuery<
    TimelineQuery,
    TimelineQueryVariables
  >(QUERY)

  const onClickLoadMore = async () => {
    const oldestId = mergedStatuses[mergedStatuses.length - 1].id
    const more = await loadMore({
      variables: {
        maxId: oldestId - 1,
      },
    })

    if (more.data.statuses.length === 0) {
      setNoMoreStatuses(true)
      return
    }

    setMoreStatuses((prev) => [...prev, ...more.data.statuses])
  }

  return (
    <Container>
      {mergedStatuses.map((status) => (
        <TimelineCard data={status} key={status.id} />
      ))}

      {!noMoreStatuses && (
        <Button isLoading={loading} onClick={onClickLoadMore}>
          Load more
        </Button>
      )}
    </Container>
  )
}
