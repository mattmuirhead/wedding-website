import { Container, Heading, Text } from '@chakra-ui/react'
import logo from '../../images/logo.svg'

const Logo = ({ color, size, ...otherProps }) => {
  const sizes = {
    sm: {
      heading: 'md',
      ampersand: 'xl',
      text: 'sm',
    },
    lg: {
      heading: '2xl',
      ampersand: '4xl',
      text: 'xl',
    },
  }

  return (
    <Container maxW="lg" centerContent m="auto" {...otherProps}>
      <img src={logo.src} alt="Coral and Matt" />
      {size === 'lg' && <Text fontSize={sizes[size].text} fontWeight={900} color={color} my={2}>28th September 2024</Text>}
    </Container>
  )
}

Logo.defaultProps = {
  color: 'black',
  size: 'lg',
}

export default Logo
