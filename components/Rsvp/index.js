import React from 'react'
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Rsvp = React.memo(() => {
  const [names, setNames] = useState('');
  const [attending, setAttending] = useState();
  const [dietaryReqs, setDietaryReqs] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isAttending = attending === 'true';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      names,
      attending,
      dietaryReqs,
    }
    
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  }

  return (
  <StyledBox id="rsvp" my={10} p={10}>
    <Container>
      {submitted ? (
        <Heading size="md" my={4} textAlign="center">
          {isAttending ? (
            <>Woo! Thanks {names}, we can&apos;t wait to celebrate with you! See you on the 28th September 2024!!</>
          ) : (
            <>Friendship sacrificed, goodbye.</>
          )}
        </Heading>
      ) : (
        <>
          <Heading size="lg" mb={4}>You in?</Heading>

          <form 
            method="POST"
            name="rsvp"
            netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="rsvp" />

            <FormControl as="fieldset" mb={4}>
              <Stack direction={['column', 'row']} spacing={[0, 2]}>
                <FormLabel as="legend">
                  NAME(S):
                </FormLabel>
                <Input variant="flushed" size="sm" name="names" value={names} onChange={e => setNames(e.target.value)} />
              </Stack>
            </FormControl>

            <FormControl as="fieldset" my={10} display="flex" justifyContent={['flex-start', 'center']}>
              <RadioGroup name="attending" value={attending} onChange={setAttending}>
                <Stack direction={['column', 'row']} spacing={[2, 6]}>
                  <Radio value="true">WE&apos;RE IN!</Radio>
                  <Radio value="false">WE CAN&apos;T MAKE IT</Radio>
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
        </>
      )}
    </Container>
  </StyledBox>
)})

Rsvp.displayName = 'Rsvp';

export default Rsvp
