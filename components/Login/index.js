import { useState } from 'react'
import { Box, Container, FormControl, Input, InputGroup, Text, IconButton } from '@chakra-ui/react'
import { setSession, setLoading } from '../../state/session'
import { useDispatch } from 'react-redux'
import { login } from '../../helpers/login'
import Logo from '../Logo'
import { ArrowForwardIcon } from '@chakra-ui/icons'

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
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      justifyContent="center"
      alignItems="center"
      className="login-page"
    >
      <Container maxWidth={400} display="flex" flexDirection="column">
        <form onSubmit={handleLogin}>
          <Logo size="sm" />
          <Text size="md" textAlign="center" my={4}>28th September 2024</Text>
          <FormControl alignItems="center">
            <InputGroup size="md" mb={4} gap={4}>
              <Input
                isInvalid={error}
                pr="3rem"
                type="password"
                placeholder="Password"
                value={passcode}
                variant="flushed"
                onChange={e => {
                  setError(false)
                  setPasscode(e.target.value)
                }}
              />

              <IconButton
                type="submit" 
                aria-label="Enter"
                icon={<ArrowForwardIcon />}
                disabled={!passcode}
              />
            </InputGroup>
          </FormControl>

          <Text color="red" mb={4} height={8}>{!!error && <>Incorrect passcode</>}</Text>
        </form>
      </Container>
    </Box>
  )
}

export default Login
