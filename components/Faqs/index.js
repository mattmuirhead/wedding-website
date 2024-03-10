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

    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            What taxi services are available?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            Unfortunately Uber is not available from the venue, however there are local taxi companies that you can use. We would also recommend booking in advance.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            If I am driving, where can I park?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            There is a very small car park on the venue site which is free of charge.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            What is the food on the day?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            There will be lots of food throughout the day (We love food so this is also very important to us)
          </Text>

          <ul>
            <li>Canapes after the ceremony (this can be adjusted to suit dietary requirements)</li>
            <li>We&apos;ll be having a picnic style wedding breakfast (who thought picnic and breakfast would go in the same sentence?!). But this isn&apos;t any picnic, this is a M&C picnic! It will be a selection of pastries, pies, cheese, meats, salads and more (this can be adjusted to suit dietary requirements).</li>
            <li>To keep you going in the evening, we will have pizza (we will make sure some pizzas are catered for dietary requirements).</li>
            <li>Plus some secret surprises!</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            What if I have dietary requirements?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            If you have any dietary requirements simply let us know when you RSVP and please be honest - we want you to enjoy the day as much as possible.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            What kind of shoes should I wear?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            While the barn is concrete flooring, most of the grounds, including where the ceremony is taking place, is either bark or grass so we wouldn&apos;t recommend a stiletto heel! Mainly, we want you to be comfortable so trainers are more than welcome!
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Can I bring a plus one?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            While we always want to be welcoming, no plus ones are allowed unless we&apos;ve stated on your invite.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Are children invited?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={4}>
            Unfortunately, as much as we&apos;d like to invite all of our friends&apos; children, we can only accommodate a few close family children. We hope that you will understand this decision and that you will still be able to join us on our special day.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Container>
)

export default Faqs