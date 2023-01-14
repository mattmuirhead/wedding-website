import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowSize } from '../../helpers/hooks'
import newZealand from '../../images/new_zealand.jpeg'

const Gifts = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 700

  return (
    <Container id="gifts" my={[10, 0]} maxW="4xl">
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
        gap={10}
      >
        <GridItem>
          <Parallax speed={isMobile ? 0 : 5}>
            <Image src={newZealand.src} alt="Oak Tree Barn" />
          </Parallax>
        </GridItem>
        <GridItem>
          <Flex direction="column" justifyContent="center" height="100%">
            <Heading size="lg" mb={4}>The Gift List</Heading>
            <Text mb={4}>We don't want towels we want a sick honeymoon</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Gifts