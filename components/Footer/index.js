import { Box, Container, useMediaQuery } from '@chakra-ui/react'
import logo from '../../images/stamp.png'
import corner from '../../images/corner.png'
import styled from '@emotion/styled'
import Image from 'next/image'

const CornerDetail = styled(Image)`
  position: absolute;
  bottom: -10px;
  left: 0;
  transform: rotate(-90deg);
`

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 700px)')

  return (
  <Box position="relative">
    <Container pt={[5, 0]} pb={10} maxWidth={250}>
      <Image src={logo.src} alt="Coral and Matt" width={250} height={250} />
      {!isMobile && <CornerDetail src={corner.src} alt="Corner detail" width={175} height={175} />}
    </Container>
  </Box>
)
}
export default Footer
