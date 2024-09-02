import { Header } from '@/src/components/header'
import { TourStep } from '@/src/components/tour-step'
import { Slot } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-red-950">
        <View className="flex-1 px-6 pt-7">
          <Header />
          <Slot />
          <TourStep />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
