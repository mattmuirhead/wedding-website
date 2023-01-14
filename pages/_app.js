import '../styles/globals.css'
import '@fontsource/montserrat'
import '@fontsource/playfair-display'
import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ParallaxProvider>
  )
}

export default App
