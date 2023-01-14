import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowSize } from '../../helpers/hooks'
import oakTree from '../../images/oak_tree_2.jpeg'

const Accomodation = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 700

  return (
    <Container id="accomodation" my={[10, 0]} maxW="4xl">
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
        gap={10}
      >
        <GridItem order={[1, 0]}>
          <Flex direction="column" justifyContent="center" height="100%" textAlign={['start', 'end']}>
            <Heading size="lg" mb={4}>The Accomodation</Heading>
            <Text mb={4}>There is a <Link href="https://www.premierinn.com/gb/en/hotels/england/kent/tonbridge/tonbridge.html" target="_blank">Premier Inn</Link> within 5 minutes walk</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Parallax speed={isMobile ? 0 : 5}>
            <Image src={oakTree.src} alt="Oak Tree Barn" />
          </Parallax>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Accomodation