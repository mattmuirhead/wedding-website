import { 
  Container, 
  Text, 
  Heading 
} from '@chakra-ui/react'

const Rsvp = () => (
  <Container id="rsvp" my={10}>
    <Heading size="lg" mb={4}>RSVP</Heading>
    <Text mb={4}>
      Tell us you're coming, or not it's fine we won't get offended!
    </Text>
  </Container>
)

export default Rsvp