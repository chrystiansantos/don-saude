import { Button } from '@/src/components/button'
import { Header } from '@/src/components/header'
import { Input } from '@/src/components/input'
import { createUser } from '@/src/http/create-user'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCPF] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmationPassword, setConfirmationPassword] = useState('')

  async function handleCreateAccount() {
    if (password !== confirmationPassword) return

    try {
      await createUser({
        name,
        email,
        cpf,
        phoneNumber: phone,
        password,
      })
    } catch (error) {
      console.log(error)
    }

    router.navigate('/(auth)/register/login')
  }

  return (
    <LinearGradient colors={['#D0005E', colors.white]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="w-full flex-1 items-center rounded-t-3xl bg-white p-6">
          <Header headerTheme="dark" />
          <View className="mt-10 w-full px-4">
            <View className="gap-x-2">
              <Text className="text-2xl font-bold text-slate-950">
                Cadaste-se
              </Text>
              <Text className="text-sm text-slate-500">
                Preencha os dados abaixo
              </Text>
            </View>
          </View>
          <View className="w-full gap-y-2 px-4 pt-8">
            <View>
              <Input
                value={name}
                autoCapitalize="words"
                onChangeText={setName}
                placeholder="Digite seu nome completo"
              >
                <Input.Label>Nome completo</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Digite seu e-mail ou código de parceiro"
                autoCorrect={false}
              >
                <Input.Label>E-mail</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={cpf}
                onChangeText={setCPF}
                maxLength={11}
                keyboardType="numeric"
                placeholder="Digite seu CPF"
                autoCorrect={false}
              >
                <Input.Label>CPF</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={phone}
                onChangeText={setPhone}
                maxLength={11}
                isPhone
                keyboardType="phone-pad"
                placeholder="DDD + celular"
              >
                <Input.Label>Telefone</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={password}
                onChangeText={setPassword}
                isPassword
                placeholder="Digite sua senha"
              >
                <Input.Label>Crie uma senha</Input.Label>
              </Input>
            </View>
            <View>
              <Input
                value={confirmationPassword}
                onChangeText={setConfirmationPassword}
                isPassword
                placeholder="Digite sua senha"
              >
                <Input.Label>Repita sua senha</Input.Label>
              </Input>
            </View>
          </View>
          <View className="w-full flex-1 justify-end">
            <Button title="Criar conta" onPress={handleCreateAccount} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
