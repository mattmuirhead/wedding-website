import { useEffect } from 'react'
import Loading from '/components/Loading'

const Gifts = () => {
  useEffect(() => {
    window.location.replace("https://prezola.com/buy/view/164075");
  }, [])

  return  <Loading />
}

export default Gifts
