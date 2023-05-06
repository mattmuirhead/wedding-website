import HeroImage from '/components/heroImage'
import Nav from '/components/Nav'
import Intro from '/components/Intro'
import Wedding from '/components/Wedding'
import Accomodation from '/components/Accomodation'
import Gifts from '/components/Gifts'
import Faqs from '/components/Faqs'
import Rsvp from '/components/Rsvp'
import Loading from '/components/Loading'
import ReturnToTop from '/components/ReturnToTop'
import Login from '/components/Login'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localForage from 'localforage'
import { setLoading, setSession } from '/state/session'

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
      {isLoading && <Loading />}
      {user?.id ? (
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
      ) : (
        <Login />
      )}
    </>
  )
}

export default Home
