import { Box, Container, Heading, Text } from '@chakra-ui/react'
import heroImg from '../../images/coral_matt.jpg'
import Logo from '../Logo'

const HeroImage = () => {
  return (
    <Box 
      display="flex"
      width="100%" 
      height="75vh" 
      backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg.src})`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Logo color="white" py={4} />
    </Box>
  )
}

export default HeroImage
