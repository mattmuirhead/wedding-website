import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import oakTree from '../../images/oak_tree.jpeg'

const Wedding = () => (
  <Container my={10} maxW="4xl">
    <Grid 
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
      gap={10}
    >
      <GridItem>
        <Image src={oakTree.src} alt="Oak Tree Barn" />
      </GridItem>
      <GridItem>
        <Flex direction="column" justifyContent="center" height="100%">
          <Heading size="lg" mb={4}>The Wedding</Heading>
          <Text mb={4}>We'll be tying the knot at the stunning <Link href="https://www.oaktreebarnweddings.com/" target="_blank">Oak Tree Barn</Link> in Tonbridge, Kent.</Text>
          <Link 
            href="https://www.google.com/maps/place/Oak+Tree+Barn+Weddings/@51.1803736,0.2865807,17z/data=!3m1!4b1!4m5!3m4!1s0x47df4976a3792487:0xaee7c176b61a9df9!8m2!3d51.1803703!4d0.2891556"
            target="_blank"
          >
            Oak Tree Cottage,<br/>
            Pembury Rd,<br/>
            Tonbridge<br/>
            TN11 0NB
          </Link>
        </Flex>
      </GridItem>
    </Grid>
  </Container>
)

export default Wedding