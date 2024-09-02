import { useSession } from '@/src/providers/auth'
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
      login: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })
  const { signIn } = useSession()

  async function login({ login, password }: LoginTypes) {
    try {
      await signIn({ login, password })
      router.navigate('/(app)/(tabs)')
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
