import { Avatar, Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import { FindAccountQuery } from 'types/graphql'

const AccountCard = ({ data }: { data: FindAccountQuery['account'] }) => {
  return (
    <Box as="article">
      <Image
        src={data.header}
        alt={`${data.username}のヘッダー画像`}
        w="full"
      />
      <Box px={8}>
        <Avatar
          src={data.avatar}
          name={data.displayName || data.username}
          width={20}
          height={20}
          mt={-10}
          border="2px solid white"
        />
        <HStack align="baseline" justifyContent={'space-between'}>
          <HStack>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              {data.displayName || data.username}
            </Text>
            <Text>@{data.username}</Text>
          </HStack>
          <Button size="sm">フォローする</Button>
        </HStack>
        <Text>{data.note}</Text>
      </Box>
    </Box>
  )
}

export default AccountCard
