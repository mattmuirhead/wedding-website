import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container, 
  Text, 
  Heading 
} from '@chakra-ui/react'

const Faqs = () => (
  <Container id="faqs" my={10}>
    <Heading size="lg" mb={4}>FAQs</Heading>
    <Text mb={4}>
      We&apos;ve put together some answers to some questions people keep asking us.
    </Text>

    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Section 1 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Section 2 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Container>
)

export default Faqs