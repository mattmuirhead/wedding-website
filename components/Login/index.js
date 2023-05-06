import { useState } from 'react'
import { Box, Button, Container, Input, InputGroup, IconButton, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import lockedImg from '../../images/locked.jpeg'
import { setSession, setLoading } from '../../state/session'
import { useDispatch } from 'react-redux'
import { login } from '../../helpers/login'

const Login = () => {
  const dispatch = useDispatch()
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    const user = login(passcode)
    if (user) {
      dispatch(setLoading(true))
      dispatch(setSession(user))
    }
    if(!user) setError(true)
  }

  return (
    <Box 
      id="top"
      display="flex"
      width="100%" 
      height="100vh" 
      backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${lockedImg.src})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth={400} display="flex" flexDirection="column">
        <form onSubmit={handleLogin}>
          <Box alignItems="center" gap={3}>
            <InputGroup size="md" mb={4}>
              <Input
                isInvalid={error}
                pr="3rem"
                type="password"
                placeholder="Password"
                size="lg" 
                focusBorderColor="white"
                color="white"
                value={passcode}
                variant="flushed"
                onChange={e => {
                  setError(false)
                  setPasscode(e.target.value)
                }}
              />
            </InputGroup>

            <Button type="submit" aria-label="Enter">
              Enter
            </Button>
          </Box>

          <Text color="red" mb={4} height={8}>{!!error && <>Incorrect passcode</>}</Text>
        </form>
      </Container>
    </Box>
  )
}

export default Login
