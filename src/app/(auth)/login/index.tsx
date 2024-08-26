import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Controller } from 'react-hook-form'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import Doctor from '../../../assets/doctor.svg'
import { Button } from '../../../components/button'
import { Header } from '../../../components/header'
import { Input } from '../../../components/input'
import { useLogin } from './use-login'

export default function Login() {
  const { control, handleSubmit, isValid, login } = useLogin()

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
                    placeholder="Digite seu e-mail ou código de parceiro"
                  >
                    <Input.Label>E-mail ou Código</Input.Label>
                  </Input>
                )}
                name="login"
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
                    <Input.Label>Senha</Input.Label>
                  </Input>
                )}
                name="password"
              />
            </View>
          </View>
          <View className="mt-4 w-full max-w-[300px] flex-1 gap-x-2">
            <Button
              disabled={!isValid}
              title="Entrar"
              onPress={handleSubmit(login)}
            />
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
