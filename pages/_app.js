import '../styles/globals.css'
import '@fontsource/montserrat'
import '@fontsource/playfair-display'
import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import theme from '../theme'

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ParallaxProvider>
  </Provider>
)

export default App
