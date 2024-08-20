import { authenticate } from '@/src/http/login'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Doctor from '../../../assets/doctor.svg'
import { Button } from '../../../components/button'
import { Header } from '../../../components/header'
import { Input } from '../../../components/input'

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    if (!login && password.length < 8) return
    try {
      await authenticate({ login, password })
      router.navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LinearGradient colors={['#D0005E', colors.white]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="w-full flex-1 items-center rounded-t-3xl bg-white p-6">
          <Header showNavigateBack headerTheme="dark" />
          <View className="my-11 h-[303px] w-[300px]">
            <Doctor />
          </View>
          <View className="mb-2 mt-2 w-full max-w-[300px]">
            <Text className="text-2xl font-bold leading-[125%] text-slate-950">
              Acesse
            </Text>
            <Text className="font-regular text-sm leading-[150%] text-slate-500">
              Entre com seus dados de acesso Don Saúde.
            </Text>
          </View>
          <View className="w-full max-w-[300px] gap-y-4">
            <View>
              <Input
                value={login}
                onChangeText={setLogin}
                autoCapitalize="none"
                placeholder="Digite seu e-mail ou código de parceiro"
              >
                <Input.Label>E-mail ou Código</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={password}
                onChangeText={setPassword}
                isPassword
                placeholder="Digite sua senha"
              >
                <Input.Label>Senha</Input.Label>
              </Input>
            </View>
          </View>
          <View className="mt-4 w-full max-w-[300px] flex-1 gap-x-2">
            <Button title="Entrar" onPress={handleLogin} />
            <Button
              onPress={() => router.navigate('/register')}
              variant="secondary"
              title="Criar conta"
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
