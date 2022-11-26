import '../styles/globals.css'
import '@fontsource/montserrat'
import '@fontsource/playfair-display'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
