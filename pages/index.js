import HeroImage from '/components/HeroImage'
import Nav from '/components/Nav'
import Intro from '/components/Intro'
import Wedding from '/components/Wedding'
import Accomodation from '/components/Accomodation'
// import Gifts from '/components/Gifts'
import Faqs from '/components/Faqs'
import Rsvp from '/components/Rsvp'
import Footer from '/components/Footer'
import Loading from '/components/Loading'
import ReturnToTop from '/components/ReturnToTop'
import Login from '/components/Login'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localForage from 'localforage'
import { setLoading, setSession } from '/state/session'
import Location from '../components/Location'
import Head from 'next/head'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state?.session?.user)
  const [isLoading, setIsLoading] = useState(true)
  const loading = useSelector(state => state?.session?.loading)

  const [storedUser, setStoredUser] = useState()
  localForage.getItem('user').then(user => setStoredUser(user))

  useEffect(() => {
    !user?.id && !!storedUser?.id && dispatch(setSession(storedUser))
    !user?.id && !storedUser?.id && dispatch(setLoading(false))
  }, [dispatch, storedUser, user])

  useEffect(() => {
    setTimeout(() => setIsLoading(loading), loading ? 0 : 1000)
  }, [loading])

  return (
    <>
      <Head>
        <title>Coral & Matts Wedding</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="We're getting married!!!" />
        <meta name="author" content="Matt Muirhead" />
      </Head>
      {isLoading && <Loading />}
      {user?.id ? (
        <>
          <HeroImage />
          <Nav />
          <Intro />
          <Wedding />
          <Location />
          <Accomodation />
          <Rsvp />
          {/* <Gifts /> */}
          <Faqs />
          <Footer />
          <ReturnToTop />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Home
