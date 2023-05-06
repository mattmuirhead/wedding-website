import { Box } from '@chakra-ui/react'
import heroImg from '../../images/coral_matt.jpg'
import Logo from '../Logo'
import Image from 'next/image'
import styled from '@emotion/styled'

const CoverImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const HeroImage = () => {
  return (
    <Box 
      id="top"
      display="flex"
      width="100%" 
      height="75vh" 
      backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <CoverImage src={heroImg} alt="Coral & Matt" priority />
      <Logo color="white" />
    </Box>
  )
}

export default HeroImage
