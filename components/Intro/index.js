import { Container, Text, Button, Box } from '@chakra-ui/react'

const handleClick = sectionName => {
  const section = document.getElementById(sectionName)
  section.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const Intro = () => (
  <Container my={10} textAlign="center">
    <Text>
      We&apos;re getting married! And if you figured out the super secret password then you&apos;re invited! Give yourself a pat on the back.
    </Text>

    <Box my={6} display="flex" justifyContent="center">
      <Button 
        onClick={() => handleClick('rsvp')}
        target="_blank"
        variant="outline" 
        className="greenButton" 
        >
        Jump straight to RSVP
      </Button>
    </Box>

  </Container>
)

export default Intro