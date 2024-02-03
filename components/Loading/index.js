import { Box } from "@chakra-ui/react"
import logo from '../../images/small-logo.svg'
import styled from "@emotion/styled"

const Spinner = styled(Box)`
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: rotating 2s linear infinite;
`

const Loading = () => (
  <Box 
    position="fixed" 
    top={0} 
    left={0} 
    bottom={0} 
    right={0} 
    backgroundColor="white"
    zIndex={10}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner maxWidth={100}>
      <img src={logo.src} alt="Coral and Matt" />
    </Spinner>
  </Box>
)

export default Loading
