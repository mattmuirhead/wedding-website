import { useState } from 'react'
import { Box, Container, FormControl, Input, InputGroup, Text, IconButton, Heading } from '@chakra-ui/react'
import { setSession, setLoading } from '../../state/session'
import { useDispatch } from 'react-redux'
import { login } from '../../helpers/login'
import Logo from '../Logo'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import swoosh from '../../images/swoosh.svg'

import ImgMd from '../../images/coralmatt/coralandmatt-md.jpeg'
import ImgLg from '../../images/coralmatt/coralandmatt-lg.jpeg'
import ImgXl from '../../images/coralmatt/coralandmatt-xl.jpeg'
import ImgFull from '../../images/coralmatt/coralandmatt.jpeg'

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
          <Heading size="md" textAlign="center" my={4}>28th September 2024</Heading>
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

      <img src={swoosh.src} alt="Swoosh" className="swoosh" />

      <img
        style={{ display: 'none' }}
        sizes="(max-width: 1920px) 100vw, 192-px"
        srcSet={`
        ${ImgMd.src} 1024w,
        ${ImgLg.src} 1280w,
        ${ImgXl.src} 1920w`}
        src={ImgFull.src}
        alt=""/>
    </Box>
  )
}

export default Login
