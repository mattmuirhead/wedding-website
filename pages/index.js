import { Container, Text } from '@chakra-ui/react'
import HeroImage from '../components/heroImage'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Wedding from '../components/Wedding'
import Accomodation from '../components/Accomodation'

const Home = () => {
  return (
    <>
      <HeroImage />
      
      <Nav />

      <Intro />

      <Wedding />

      <Accomodation />
    </>
  )
}

export default Home
