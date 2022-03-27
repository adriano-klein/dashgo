import { Button, Flex, FormLabel, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'
      >

      <Flex
        as='form'width='100%'
        maxWidth={360}
        bgColor='gray.800'
        p={8}
        borderRadius='8'
        flexDirection='column'>

        <Stack spacing={6}>
          <Input name={'email'} type='email' label='Email'/>
          <Input name={'password'} type='password' label='Senha'/>
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme={"pink"}
          size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
