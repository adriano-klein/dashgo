import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { FieldError, SubmitHandler, useForm } from "react-hook-form"

type SignInFormData = {
  email: string;
  password: string;
  error: FieldError;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;


  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
  }

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
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
        >

        <Stack spacing={6}>
          <Input
            name={'email'}
            type='email'
            label='Email'
            error={errors.email}
            {...register('email', {
              required: 'E-mail é obrigatório'
            })} />
          
          <Input
            name={'password'}
            type='password'
            error={errors.password}
            label='Senha'
            {...register('password', {
              required: 'Senha é obrigatória'
            })} />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme={"pink"}
          size='lg'
          isLoading={formState.isSubmitting}
          >
            Entrar
        </Button>
        <Text fontSize='xs' mt='2'>Esqueceu sua senha?</Text>
      </Flex>
    </Flex>
  )
}
