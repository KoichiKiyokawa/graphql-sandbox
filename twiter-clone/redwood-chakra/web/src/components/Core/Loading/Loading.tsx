import { Box, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box w="100vw" h="100vh" display="grid" placeItems="center">
      <Spinner />
    </Box>
  )
}

export default Loading
