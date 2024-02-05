import { Container, Flex, Grid, GridItem, Heading, Image, Button, Text } from '@chakra-ui/react'
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
        <GridItem order={[1, 0]}>
          <Flex direction="column" justifyContent="center" height="100%">
            <Heading size="lg" mb={4}>The Gift List</Heading>

            <Text mb={4}>
              We don&apos;t expect gifts, we&apos;re just happy you can join us on our special day. 
              If you would like to give us something, we would love contributions to our honeymoon.
            </Text>

            <Button 
              as="a" 
              href="https://prezola.com/buy/view/164075"
              target="_blank"
              variant="outline" 
              className="greenButton" 
              >
              Go to the gift list
            </Button>
          </Flex>
        </GridItem>
        <GridItem>
          <Parallax speed={isMobile ? 0 : 5}>
            <Image src={newZealand.src} alt="Oak Tree Barn" borderRadius={20} />
          </Parallax>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Gifts