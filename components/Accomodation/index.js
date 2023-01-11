import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import oakTree from '../../images/oak_tree_2.jpeg'

const Accomodation = () => (
  <Container my={10} maxW="4xl">
    <Grid 
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
      gap={10}
    >
      <GridItem order={[1, 0]}>
        <Flex direction="column" justifyContent="center" height="100%" textAlign={['start', 'end']}>
          <Heading size="lg" mb={4}>Accomodation</Heading>
          <Text mb={4}>There is a <Link href="https://www.premierinn.com/gb/en/hotels/england/kent/tonbridge/tonbridge.html" target="_blank">Premier Inn</Link> within 5 minutes walk</Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Image src={oakTree.src} alt="Oak Tree Barn" />
      </GridItem>
    </Grid>
  </Container>
)

export default Accomodation