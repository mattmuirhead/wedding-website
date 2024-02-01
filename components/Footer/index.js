import { Box, Container } from '@chakra-ui/react'
import logo from '../../images/small-logo.svg'
import styled from '@emotion/styled'

const Mask = styled.svg`
  fill: var(--secondary);
`

const Wrapper = styled(Box)`
  background-color: var(--secondary);
`

const Footer = () => (
  <Wrapper>
    <Container py={10} maxWidth={150}>
      <img src={logo.src} alt="Coral and Matt" />
    </Container>
  </Wrapper>
)

export default Footer
