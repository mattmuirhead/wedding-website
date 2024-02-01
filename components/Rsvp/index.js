import { 
  Box,
  Button,
  Container,
  Heading,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  Textarea,
  Input,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useState } from 'react'

const StyledBox = styled(Box)`
  background-color: var(--secondary);
  color: var(--primary);
  overflow: hidden;
  position: relative;
`

const Rsvp = () => {
  const [name, setName] = useState();
  const [attending, setAttending] = useState();
  const [dietaryReqs, setDietaryReqs] = useState();

  const isAttending = attending === 'true';

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  }

  return (
  <StyledBox id="rsvp" my={10} p={10}>
    <Container>
      <Heading size="lg" mb={4}>You in?</Heading>

      <form name="rsvp" netlify onSubmit={handleSubmit}>
        <FormControl as="fieldset" mb={4}>
          <Stack direction={['column', 'row']} spacing={[0, 2]}>
            <FormLabel as="legend">
              NAME(S):
            </FormLabel>
            <Input variant="flushed" size="sm" name="names" value={name} onChange={e => setName(e.target.value)} />
          </Stack>
        </FormControl>

        <FormControl as="fieldset" my={10} display="flex" justifyContent={['flex-start', 'center']}>
          <RadioGroup name="attending" value={attending} onChange={setAttending}>
            <Stack direction={['column', 'row']} spacing={[2, 6]}>
              <Radio value="true">WE'RE IN!</Radio>
              <Radio value="false">WE CAN'T MAKE IT</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {isAttending ? (
          <FormControl as="fieldset" mb={8}>
            <FormLabel as="legend" textAlign={['left', 'center']}>
              LET US KNOW IF YOU HAVE ANY DIETARY REQUIREMENTS!
            </FormLabel>
            <Textarea variant="flushed" rows={1} name="dietaryReqs" value={dietaryReqs} onChange={e => setDietaryReqs(e.target.value)} />
          </FormControl>
        ) : undefined}

        <Box display="flex" justifyContent="center">
          {!!attending && <Button type="submit" variant="outline">{isAttending ? 'Confirm' : 'Confirm to sacrificing your friendship with us'}</Button>}
        </Box>
      </form>
    </Container>
  </StyledBox>
)}

export default Rsvp