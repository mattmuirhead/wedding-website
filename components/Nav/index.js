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

const StyledLink = styled(Link)`
  text-decoration: none !important;
  font-family: 'CreativeVintageRegular', sans-serif;
`

const StyledBox = styled(Box)`
  background-color: var(--chakra-colors-chakra-body-bg);
`

const NavLink = ({ isMobile, onClick, location, label }) => (
  <StyledLink 
    fontSize={isMobile ? 26 : 16} 
    onClick={() => {
      onClick()
      handleClick(location)
    }}>
    {label}
  </StyledLink>
)

const Links = ({ isMobile, onClick }) => (
  <>
    <NavLink isMobile={isMobile} onClick={onClick} location="wedding" label="Wedding" />
    <NavLink isMobile={isMobile} onClick={onClick} location="location" label="Location" />
    <NavLink isMobile={isMobile} onClick={onClick} location="accomodation" label="Accomodation" />
    <NavLink isMobile={isMobile} onClick={onClick} location="rsvp" label="RSVP" />
    <NavLink isMobile={isMobile} onClick={onClick} location="gifts" label="Gifts" />
    <NavLink isMobile={isMobile} onClick={onClick} location="faqs" label="FAQs" />
  </>
)


const Nav = () => {
  const [isMobile] = useMediaQuery('(max-width: 700px)')
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <StyledBox
      display="flex" 
      py={4}
      position="sticky" 
      top={-1} 
      alignItems="center"
      zIndex={2}
      >
      <Container maxWidth={1100} display="flex" alignItems="center">
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
                <DrawerCloseButton borderRadius={100} />

                <DrawerBody display="flex">
                  <VStack m="auto">
                    <Links isMobile onClick={onClose} />
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
      </Container>
    </StyledBox>
  )
}

export default Nav
