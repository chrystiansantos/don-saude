import { useNavigation } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Schedules() {
  const navigation = useNavigation()

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={navigation.goBack}>
        <Text className="text-2xl font-bold text-zinc-950">Schedules</Text>
      </TouchableOpacity>
    </View>
  )
}
