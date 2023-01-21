import { useState } from 'react'
import { Box, Container, Input, InputGroup, InputRightElement, Button, IconButton, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import lockedImg from '../../images/locked.jpeg'
import styled from '@emotion/styled'
import { setSession } from '../../state/session'
import { useDispatch } from 'react-redux'
import { login } from '../../helpers/login'

const Passcode = styled(Input)`
  background-color: rgba(255, 255, 255, 0.8);
`

const Login = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState(false)

  const toggleViewPasscode = () => setShow(!show)

  const handleLogin = e => {
    e.preventDefault()
    const user = login(passcode)
    if (user) dispatch(setSession(user))
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
          <InputGroup size="md" mb={4}>
            <Passcode
              isInvalid={error}
              pr="3rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              size="lg" 
              focusBorderColor="white"
              value={passcode}
              onChange={e => {
                setError(false)
                setPasscode(e.target.value)
              }}
            />
            <InputRightElement width="3rem" pt={2}>
              <IconButton 
                aria-label='Show/Hide passcode'
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                onClick={toggleViewPasscode}
              />
            </InputRightElement>
          </InputGroup>

          {!!error && <Text color="red" mb={4}>Incorrect passcode</Text>}

          <Button 
            type="submit"
            colorScheme="whiteAlpha"
            variant="outline"
          >
            Enter
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default Login
