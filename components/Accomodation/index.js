import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowSize } from '../../helpers/hooks'
import oakTree from '../../images/oak_tree_3.jpeg'

const Accomodation = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 700

  return (
    <Container id="accomodation" my={[10, 0]} maxW="4xl">
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} 
        gap={10}
      >
        <GridItem>
          <Parallax speed={isMobile ? 0 : 5}>
            <Image src={oakTree.src} alt="Oak Tree Barn" borderRadius={20} />
          </Parallax>
        </GridItem>
        <GridItem>
          <Flex direction="column" justifyContent="center" height="100%">
            <Heading size="lg" mb={4}>The Accomodation</Heading>
            <Text mb={4}>
              There is a <Link target="_blank" href="https://maps.app.goo.gl/jWXrKLKUzs5npQig8">Premier Inn within 10 minute walk</Link> from the venue should you want to dance the night away!
              <br /><br />
              There is also another <Link target="_blank" href="https://maps.app.goo.gl/rQtJDGv8m64YUPWP7">Premier Inn within Tonbridge town centre</Link>. 
              <br /><br />
              None of the Premier Inns have blocked out bookings for our wedding so if you would like to stay overnight we would recommend booking as soon as you can.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Accomodation