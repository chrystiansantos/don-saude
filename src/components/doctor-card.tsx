import { CalendarBlank, Star } from 'phosphor-react-native'
import { Image, Text, View } from 'react-native'
import { CircleButton } from './circle-button'

export function DoctorCard() {
  return (
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
  )
}
