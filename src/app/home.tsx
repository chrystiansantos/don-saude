import {
  Bandaids,
  BellSimpleRinging,
  Brain,
  CalendarBlank,
  ChatTeardropDots,
  Funnel,
  Heartbeat,
  MagnifyingGlass,
  Star,
  TestTube,
} from 'phosphor-react-native'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import { Button } from '../components/button'
import { CircleButton } from '../components/circle-button'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F2F4F7]">
      <View className="w-full flex-1 items-center rounded-t-3xl p-6">
        <View className="w-full flex-row justify-between">
          <View className="justify-center gap-1.5">
            <View className="h-0.5 w-5 rounded-full bg-slate-800" />
            <View className="h-0.5 w-3 rounded-full bg-slate-800" />
          </View>
          <View className="flex-row gap-4">
            <BellSimpleRinging size={20} color="#475467" />
            <ChatTeardropDots size={20} color="#475467" />
          </View>
        </View>

        <View className="mt-8 w-full">
          <Text className="text-2xl font-bold text-slate-950">
            Olá, Paciente
          </Text>
          <Text className="text-sm text-slate-500">
            Como podemos te ajudar hoje?
          </Text>
        </View>

        <View className="mt-8 w-full flex-row">
          <View className="h-12 flex-1 flex-row items-center gap-x-1 rounded-xl border border-[#D0D5DD] bg-white px-2">
            <MagnifyingGlass />
            <TextInput placeholderTextColor="#667085" placeholder="Buscar" />
          </View>
          <CircleButton
            customClassName="ml-4 w-12 h-12 border border-[#D0D5DD]"
            onPress={() => {}}
          >
            <Funnel color="#101828" size={20} />
          </CircleButton>
        </View>

        <View className="mt-8 w-full flex-row items-center justify-between">
          <Text className="text-base font-medium text-slate-800">
            Mais procurados
          </Text>
          <Button
            variant="secondary"
            customClassName="w-20"
            title="Ver todas"
            onPress={() => {}}
          />
        </View>
        <View className="w-full flex-row gap-4">
          <View className="flex-1 rounded-3xl bg-white p-6">
            <Image
              className="mx-auto h-[72px] w-[72px] rounded-full"
              resizeMode="cover"
              source={require('../assets/people-doctor.jpg')}
              alt=""
            />
            <Text className="mt-3 w-full text-center text-base font-medium text-slate-950">
              Nome Dr.
            </Text>
            <Text className="w-full text-center font-regular text-xs text-slate-500">
              área de atendimento
            </Text>
            <View className="mt-3 flex-row justify-between">
              <View className="flex-row items-center gap-x-1">
                <Star size={12} color="#667085" />
                <Text className="font-regular text-xs text-slate-500">9,8</Text>
              </View>
              <CircleButton
                customClassName="ml-4 w-10 h-10 bg-red-800"
                onPress={() => {}}
              >
                <CalendarBlank color="white" weight="bold" size={20} />
              </CircleButton>
            </View>
          </View>

          <View className="flex-1 rounded-3xl bg-white p-6">
            <Image
              className="mx-auto h-[72px] w-[72px] rounded-full"
              resizeMode="cover"
              source={require('../assets/people-doctor.jpg')}
              alt=""
            />
            <Text className="mt-3 w-full text-center text-base font-medium text-slate-950">
              Nome Dr.
            </Text>
            <Text className="w-full text-center font-regular text-xs text-slate-500">
              área de atendimento
            </Text>
            <View className="mt-3 flex-row justify-between">
              <View className="flex-row items-center gap-x-1">
                <Star size={12} color="#667085" />
                <Text className="font-regular text-xs text-slate-500">9,8</Text>
              </View>
              <CircleButton
                customClassName="ml-4 w-10 h-10 bg-red-800"
                onPress={() => {}}
              >
                <CalendarBlank color="white" weight="bold" size={20} />
              </CircleButton>
            </View>
          </View>
        </View>
        <View className="mt-8 w-full flex-row items-center justify-between">
          <Text className="text-base font-medium text-slate-800">
            Categorias
          </Text>
          <Button
            customClassName="w-20"
            variant="secondary"
            title="Ver todas"
            onPress={() => {}}
          />
        </View>
        <View className="mt-4 flex-row gap-x-2">
          <View className="h-[102px] w-[82] items-center justify-center rounded-3xl bg-white">
            <Heartbeat size={24} color="#D0005E" />
            <Text className="pt-3 font-regular text-xs text-slate-500">
              Cardiologia
            </Text>
          </View>
          <View className="h-[102px] w-[82] items-center justify-center rounded-3xl bg-white">
            <Bandaids size={24} color="#D0005E" />
            <Text className="pt-3 font-regular text-xs text-slate-500">
              Clínico
            </Text>
          </View>
          <View className="h-[102px] w-[82] items-center justify-center rounded-3xl bg-white">
            <Brain size={24} color="#D0005E" />
            <Text className="pt-3 font-regular text-xs text-slate-500">
              Neurologia
            </Text>
          </View>
          <View className="h-[102px] w-[82] items-center justify-center rounded-3xl bg-white">
            <TestTube size={24} color="#D0005E" />
            <Text className="pt-3 font-regular text-xs text-slate-500">
              Exames
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
