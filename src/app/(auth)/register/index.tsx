import { Button } from '@/src/components/button'
import { Header } from '@/src/components/header'
import { Input } from '@/src/components/input'
import { LinearGradient } from 'expo-linear-gradient'
import { Controller } from 'react-hook-form'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { useRegister } from './use-register'

export default function Register() {
  const { control, createAccount, handleSubmit, isValid } = useRegister()

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
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    autoCapitalize="words"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Digite seu nome completo"
                  >
                    <Input.Label>Nome completo</Input.Label>
                  </Input>
                )}
                name="name"
              />
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Digite seu e-mail ou código de parceiro"
                    autoCorrect={false}
                  >
                    <Input.Label>E-mail</Input.Label>
                  </Input>
                )}
                name="email"
              />
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    maxLength={11}
                    keyboardType="numeric"
                    placeholder="Digite seu CPF"
                    autoCorrect={false}
                  >
                    <Input.Label>CPF</Input.Label>
                  </Input>
                )}
                name="cpf"
              />
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    maxLength={11}
                    isPhone
                    keyboardType="phone-pad"
                    placeholder="DDD + celular"
                  >
                    <Input.Label>Telefone</Input.Label>
                  </Input>
                )}
                name="phoneNumber"
              />
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    isPassword
                    placeholder="Digite sua senha"
                  >
                    <Input.Label>Crie uma senha</Input.Label>
                  </Input>
                )}
                name="password"
              />
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    isPassword
                    placeholder="Confirme sua senha"
                  >
                    <Input.Label>Repita sua senha</Input.Label>
                  </Input>
                )}
                name="passwordConfirmation"
              />
            </View>
          </View>
          <View className="w-full flex-1 justify-end">
            <Button
              disabled={!isValid}
              title="Criar conta"
              onPress={handleSubmit(createAccount)}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
