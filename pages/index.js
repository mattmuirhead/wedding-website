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
import Login from '../components/Login'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector(state => state?.session?.user)

  if (!user) return <Login />

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
