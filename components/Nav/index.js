import { useRef } from 'react'
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

  const FirstLinks = () => (
    <>
      <Link>Wedding</Link>
      <Link>Accomodation</Link>
    </>
  )

  const SecondLinks = () => (
    <>
      <Link>RSVP</Link>
      <Link>Photos</Link>
    </>
  )

  return (
    <Container 
      maxWidth={1024} 
      display="flex" 
      py={4}
      position="sticky" 
      top={-1} 
      alignItems="center"
      background="white"
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
