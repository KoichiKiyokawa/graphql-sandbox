import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { TimelineQuery } from 'types/graphql'

type Props = {
  data: TimelineQuery['statuses'][number]
}

const TimelineCard = ({ data: { account, content, createAt } }: Props) => {
  return (
    <HStack
      as="article"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.400"
      p={4}
      align="flex-start"
      css={{
        '&+&': {
          borderTop: 'none',
        },
      }}
    >
      <Avatar
        src={account.avatar}
        name={account.displayName || account.username}
      />

      <VStack align={'flex-start'}>
        <HStack justifyContent={'start'}>
          <Text fontWeight={'bold'}>
            {account.displayName || account.username}
          </Text>
          <Text>@{account.username}</Text>
          <Text textColor={'gray.400'}>
            {dayjs(createAt).format('YYYY/MM/DD hh:mm')}
          </Text>
        </HStack>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  )
}

export default TimelineCard
