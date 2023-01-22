import { Box, Spinner } from "@chakra-ui/react"

const Loading = () => (
  <Box 
    position="fixed" 
    top={0} 
    left={0} 
    bottom={0} 
    right={0} 
    backgroundColor="white"
    zIndex={10}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner 
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl" 
    />
  </Box>
)

export default Loading
