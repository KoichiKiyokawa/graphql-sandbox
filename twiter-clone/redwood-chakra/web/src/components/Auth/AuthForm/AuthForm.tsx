import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Submit, useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

type FormProps = {
  username: string
  password: string
}

const AuthForm = ({ pageType }: { pageType: 'login' | 'signup' }) => {
  const { logIn, signUp, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
  })

  return (
    <Container>
      <form
        onSubmit={handleSubmit(async (data) => {
          if (pageType === 'login') {
            await logIn(data)
          } else if (pageType === 'signup') {
            await signUp(data)
          }

          navigate(routes.timeline())
        })}
      >
        <Heading as="h1" mb={4}>
          {pageType === 'login' ? 'Login Page' : 'SignUp Page'}
        </Heading>

        <FormControl isInvalid={!!errors.username}>
          <FormLabel>
            <Text>Email</Text>
            <Input
              {...register('username', {
                required: { value: true, message: 'username is required' },
              })}
            />
          </FormLabel>
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} mt={4}>
          <FormLabel>
            <Text>Password</Text>
            <Input
              type="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'Password should be longer than 6',
                },
              })}
            />
          </FormLabel>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" as={Submit} disabled={loading}>
          {pageType === 'login' ? 'Login' : 'SignUp'}
        </Button>
      </form>
    </Container>
  )
}

export default AuthForm
