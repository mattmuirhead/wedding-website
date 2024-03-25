import { Container, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowSize } from '../../helpers/hooks'
import oakTree from '../../images/oak_tree.jpeg'

const Wedding = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 700

  return (
    <Container id="wedding" my={[10, 0]} maxW="4xl">
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
            <Heading size="lg" mb={4}>The Wedding</Heading>
            <Text mb={4}>
              We&apos;re tying the knot at the beautiful <Link href="https://www.oaktreebarnweddings.com/" target="_blank">Oak Tree Barn</Link> in <Link href="https://www.google.com/maps/place/Oak+Tree+Barn+Weddings/@51.1803736,0.2865807,17z/data=!3m1!4b1!4m5!3m4!1s0x47df4976a3792487:0xaee7c176b61a9df9!8m2!3d51.1803703!4d0.2891556" target="_blank">Tonbridge, Kent</Link> at 1:00PM, Saturday 28th September 2024.
            </Text>
            <Text mb={4}>
              You&apos;re welcome to arrive from 12pm. The ceremony will begin at 1pm. Drinks, food and lots of dancing will follow from 2pm onwards.
            </Text>
            <Text mb={4}>
              If you&apos;re an evening guest, you&apos;re welcome to arrive from 6pm onwards - we look forward to seeing you!
            </Text>
            <Text mb={4}>
              The day will unfortunately have to come to an end - boo! Celebrations will end around 11:30PM.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Wedding