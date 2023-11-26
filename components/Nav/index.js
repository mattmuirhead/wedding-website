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
import styled from '@emotion/styled'

const handleClick = sectionName => {
  const section = document.getElementById(sectionName)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const NavLink = styled(Link)`
  text-decoration: none !important;
  font-family: 'CreativeVintageRegular', sans-serif;
`

const StyledContainer = styled(Container)`
  background-color: var(--chakra-colors-chakra-body-bg);
`

const Links = () => (
  <>
    <NavLink onClick={() => handleClick('wedding')}>Wedding</NavLink>
    <NavLink onClick={() => handleClick('location')}>Location</NavLink>
    <NavLink onClick={() => handleClick('accomodation')}>Accomodation</NavLink>
    <NavLink onClick={() => handleClick('rsvp')}>RSVP</NavLink>
    <NavLink onClick={() => handleClick('gifts')}>Gifts</NavLink>
    <NavLink onClick={() => handleClick('faqs')}>FAQs</NavLink>
  </>
)


const Nav = () => {
  const [isMobile] = useMediaQuery('(max-width: 700px)')
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <StyledContainer 
      maxWidth={1100} 
      display="flex" 
      py={4}
      position="sticky" 
      top={-1} 
      alignItems="center"
      zIndex={1}
    >
      {isMobile ? (
        <>
          <Logo size="sm" flex={0.5} />
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
                  <Links />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box mr="auto" display="flex" flex={1} justifyContent="space-evenly">
          <Links />
        </Box>
      )}
    </StyledContainer>
  )
}

export default Nav
