import { Box, Container, Text } from '@chakra-ui/react'
import logo from '../../images/small-logo.svg'
import styled from '@emotion/styled'
import Countdown from 'react-countdown';

const Wrapper = styled(Box)`
  background-color: var(--secondary);
`

const Footer = () => (
  <Wrapper>
    <Container py={10} display="flex" justifyContent="center" flexDirection="column" gap={6}>
      <Box maxWidth={150} m="auto">
        <img src={logo.src} alt="Coral and Matt" />
      </Box>

      <Box color="white" textAlign="center">
        <Countdown
          date="2024-09-28T00:00:00"
          intervalDelay={0}
          precision={3}
          renderer={({ days, hours, minutes, seconds, completed }) => (
            <Text size="lg" mb={4}>
              {completed ? (
                <>Today&apos;s the day!!!!</>
              ) : (
                <>
                {days} {days === 1 ? 'day' : 'days'},&nbsp;
                {hours} {hours === 1 ? 'hour' : 'hours'},&nbsp;
                {minutes} {minutes === 1 ? 'minute' : 'minutes'} and&nbsp;
                {seconds} {seconds === 1 ? 'second' : 'seconds'}
                </>
              )}
            </Text>
          )}
        />
      </Box>
    </Container>
  </Wrapper>
)

export default Footer
