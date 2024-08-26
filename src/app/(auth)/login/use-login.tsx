import { authenticate } from '@/src/http/login'
import { loginSchema, LoginTypes } from '@/src/schema-validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'

export function useLogin() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginTypes>({
    values: {
      login: 'tiao_bruto@gmail.com',
      password: '12345678',
    },
    resolver: zodResolver(loginSchema),
  })

  async function login({ login, password }: LoginTypes) {
    try {
      await authenticate({ login, password })
      router.navigate('/autheticated/(tabs)')
    } catch (error) {
      Alert.alert(
        'Credenciais invalidas',
        'Email ou senha invalida, gostaria de resetar sua senha ?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Resetar',
            onPress: () =>
              console.log('Redirecionar para a tela de reset de senha'),
            style: 'destructive',
          },
        ],
      )
    }
  }

  return {
    control,
    handleSubmit,
    isValid,
    login,
  }
}
