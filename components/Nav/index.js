import { useEffect, useRef } from 'react'
import { 
  Box, 
  Container, 
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Link, 
  useDisclosure, 
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../Logo'

const Nav = () => {
  const [isMobile] = useMediaQuery('(max-width: 700px)')
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = event => {
    event.preventDefault()
    const sectionName = event.target.href.split('#')[1]
    const section =  document.getElementById(sectionName)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const FirstLinks = () => (
    <>
      <Link href="#wedding" onClick={handleClick}>Wedding</Link>
      <Link href="#accomodation" onClick={handleClick}>Accomodation</Link>
      <Link href="#gifts" onClick={handleClick}>Gifts</Link>
    </>
  )

  const SecondLinks = () => (
    <>
      <Link href="#faqs" onClick={handleClick}>FAQs</Link>
      <Link href="#rsvp" onClick={handleClick}>RSVP</Link>
      <Link href="#photos" onClick={handleClick}>Photos</Link>
    </>
  )

  return (
    <Container 
      maxWidth={1100} 
      display="flex" 
      py={4}
      position="sticky" 
      top={-1} 
      alignItems="center"
      background="white"
      zIndex={1}
    >
      {!isMobile && 
        <Box mr="auto" display="flex" flex={1} justifyContent="space-evenly">
          <FirstLinks />
        </Box>
      }
      <Logo size="sm" flex={0} />
      {!isMobile && 
        <Box ml="auto" display="flex" flex={1} justifyContent="space-evenly">
          <SecondLinks />
        </Box>
      }
      {isMobile &&
        <>
          <HamburgerIcon boxSize={5} ref={btnRef} onClick={onOpen} />
          <Drawer
            isOpen={isOpen}
            placement="right"
            size="full"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody display="flex">
                <VStack m="auto">
                  <FirstLinks />
                  <SecondLinks />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      }
    </Container>
  )
}

export default Nav
