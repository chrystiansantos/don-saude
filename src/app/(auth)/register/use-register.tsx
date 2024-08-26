import { createUser } from '@/src/http/create-user'
import { registerSchema, RegisterTypes } from '@/src/schema-validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'

export function useRegister() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterTypes>({
    resolver: zodResolver(registerSchema),
  })

  async function createAccount(newAccount: RegisterTypes) {
    try {
      await createUser({
        ...newAccount,
      })
      router.navigate('/(auth)/login')
    } catch (error) {
      const messageError = error as { message: string }
      return Alert.alert('Error !', messageError.message, [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Resetar senha',
          onPress: () =>
            console.log('Redirecionar para a tela de reset de senha'),
          style: 'destructive',
        },
      ])
    }
  }

  return {
    control,
    handleSubmit,
    isValid,
    createAccount,
  }
}
