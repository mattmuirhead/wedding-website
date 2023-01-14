import { Container, Text } from '@chakra-ui/react'
import HeroImage from '../components/heroImage'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Wedding from '../components/Wedding'
import Accomodation from '../components/Accomodation'
import Gifts from '../components/Gifts'
import Faqs from '../components/Faqs'
import Rsvp from '../components/Rsvp'
import ReturnToTop from '../components/ReturnToTop'

const Home = () => {
  return (
    <>
      <HeroImage />
      
      <Nav />

      <Intro />

      <Wedding />

      <Accomodation />

      <Gifts />

      <Faqs />

      <Rsvp />

      <ReturnToTop />
    </>
  )
}

export default Home
