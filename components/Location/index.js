import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowSize } from '../../helpers/hooks'
import oakTree from '../../images/oak_tree_2.jpeg'

const Location = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 700

  return (
    <Container id="location" my={[10, 0]} maxW="4xl">
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
        gap={10}
      >
        <GridItem order={[1, 0]}>
          <Flex direction="column" justifyContent="center" height="100%">
            <Heading size="lg" mb={4}>The Location</Heading>
            <Link 
              href="https://www.google.com/maps/place/Oak+Tree+Barn+Weddings/@51.1803736,0.2865807,17z/data=!3m1!4b1!4m5!3m4!1s0x47df4976a3792487:0xaee7c176b61a9df9!8m2!3d51.1803703!4d0.2891556"
              target="_blank"
            >
              Oak Tree Cottage,<br/>
              Pembury Rd,<br/>
              Tonbridge<br/>
              TN11 0NB
            </Link>

            <br/>

            <Text mb={4}>
              Oak tree barn is situated just off of the A21, with easy access to the M25.
              <br /><br />
              The nearest train station is Tonbridge station (Barden Rd, Tonbridge TN9 1TT). From the station it is a 3 minute drive or a 30 minute walk.
            </Text>
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

export default Location