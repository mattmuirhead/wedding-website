import { Box, Container, Heading, Text } from '@chakra-ui/react'
import heroImg from '../images/coral_matt.jpg'

const Home = () => {
  return (
    <>
      <Box 
        display="flex"
        width="100%" 
        height="75vh" 
        backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg.src})`}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Container maxW="lg" centerContent py={4} m="auto">
          <Heading as="h1" size="2xl" color="white" display="flex" alignItems="center">
            Coral <Heading size="4xl" mx={3}>&</Heading> Matt
          </Heading>
          <Text as="h2" fontSize="xl" color="white">28th September 2024</Text>
        </Container>
      </Box>
    </>
  )
}

export default Home
