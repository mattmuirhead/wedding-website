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

const Mask = styled.svg`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 1;
  fill: var(--chakra-colors-chakra-body-bg);
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
    >
      <CoverImage src={heroImg} alt="Coral & Matt" priority />
      <Logo color="white" />

      <Mask viewBox="0 0 1440 120" version="1.1">
        <path d="M0,60L60,70C120,80,240,100,360,92.5C480,85,600,50,720,45C840,40,960,65,1080,75C1200,85,1320,80,1440,65C1560,50,1680,25,1800,32.5C1920,40,2040,80,2160,90C2280,100,2400,80,2520,80C2640,80,2760,100,2880,90C3000,80,3120,40,3240,25C3360,10,3480,20,3600,40C3720,60,3840,90,3960,90C4080,90,4200,60,4320,40C4440,20,4560,10,4680,15C4800,20,4920,40,5040,47.5C5160,55,5280,50,5400,57.5C5520,65,5640,85,5760,97.5C5880,110,6000,115,6120,100C6240,85,6360,50,6480,30C6600,10,6720,5,6840,17.5C6960,30,7080,60,7200,77.5C7320,95,7440,100,7560,87.5C7680,75,7800,45,7920,37.5C8040,30,8160,45,8280,62.5C8400,80,8520,100,8580,110L8640,120L8640,150L8580,150C8520,150,8400,150,8280,150C8160,150,8040,150,7920,150C7800,150,7680,150,7560,150C7440,150,7320,150,7200,150C7080,150,6960,150,6840,150C6720,150,6600,150,6480,150C6360,150,6240,150,6120,150C6000,150,5880,150,5760,150C5640,150,5520,150,5400,150C5280,150,5160,150,5040,150C4920,150,4800,150,4680,150C4560,150,4440,150,4320,150C4200,150,4080,150,3960,150C3840,150,3720,150,3600,150C3480,150,3360,150,3240,150C3120,150,3000,150,2880,150C2760,150,2640,150,2520,150C2400,150,2280,150,2160,150C2040,150,1920,150,1800,150C1680,150,1560,150,1440,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
      </Mask>
    </Box>
  )
}

export default HeroImage
