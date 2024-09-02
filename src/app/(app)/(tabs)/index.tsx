import { CategoryCard } from '@/src/components/category-card'
import { DoctorCard } from '@/src/components/doctor-card'
import {
  Bandaids,
  BellSimpleRinging,
  Brain,
  ChatTeardropDots,
  Funnel,
  Heartbeat,
  MagnifyingGlass,
  TestTube,
} from 'phosphor-react-native'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../../components/button'
import { CircleButton } from '../../../components/circle-button'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F2F4F7]">
      <ScrollView className="flex-1">
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="w-full"
            contentContainerStyle={{
              columnGap: 20,
            }}
          >
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </ScrollView>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 6 }}
            className="mt-4 w-full"
          >
            <CategoryCard
              title="Cardiologia"
              icon={<Heartbeat size={24} color="#D0005E" />}
            />
            <CategoryCard
              title="Clínico"
              icon={<Bandaids size={24} color="#D0005E" />}
            />
            <CategoryCard
              title="Neurologia"
              icon={<Brain size={24} color="#D0005E" />}
            />
            <CategoryCard
              title="Exames"
              icon={<TestTube size={24} color="#D0005E" />}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
