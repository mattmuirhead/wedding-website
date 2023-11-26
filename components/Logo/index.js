import { Container, Heading, Text } from '@chakra-ui/react'
import logo from '../../images/logo.svg'

const Logo = ({ color, size, ...otherProps }) => {
  console.log(logo)
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
      <img src={logo.src} />
      {size === 'lg' && <Text as="h2" fontSize={sizes[size].text} color={color}>28th September 2024</Text>}
    </Container>
  )
}

Logo.defaultProps = {
  color: 'black',
  size: 'lg',
}

export default Logo
