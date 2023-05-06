import { 
  Container, 
  Text, 
  Heading 
} from '@chakra-ui/react'

const Rsvp = () => (
  <Container id="rsvp" my={10}>
    <Heading size="lg" mb={4}>RSVP</Heading>
    <Text mb={4}>
      Tell us you&apos;re coming, or not it&apos;s fine we won&apos;t get offended!
    </Text>
  </Container>
)

export default Rsvp