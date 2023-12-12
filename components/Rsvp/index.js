import { 
  Box,
  Container
} from '@chakra-ui/react'
import JotformEmbed from 'react-jotform-embed';
import styled from '@emotion/styled'

const StyledBox = styled(Box)`
  background-color: var(--secondary);
  overflow: hidden;
`

const Rsvp = () => (
  <StyledBox id="rsvp" my={10}>
    <Container>
      <JotformEmbed src="https://form.jotformeu.com/233424225825049" />
    </Container>
  </StyledBox>
)

export default Rsvp