import { Container, Heading, Text } from '@chakra-ui/react'

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
      <Heading size={sizes[size].heading} color={color} display="flex" alignItems="center" style={{ whiteSpace: 'noWrap' }}>
        {size === 'lg' ? 
          <>Coral <Heading size={sizes[size].ampersand} mx={3}>&</Heading> Matt</>
        :
          <>Coral & Matt</>
        }
      </Heading>
      {size === 'lg' && <Text as="h2" fontSize={sizes[size].text} color={color}>28th September 2024</Text>}
    </Container>
  )
}

Logo.defaultProps = {
  color: 'black',
  size: 'lg',
}

export default Logo
