import { Header } from '@/src/components/header'
import { TourStep } from '@/src/components/tour-step'
import { Slot, usePathname } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const ROUTES_TOUR = {
  '/': 0,
  '/access': 1,
  '/get-started': 2,
}

export default function RootLayout() {
  const pathname = usePathname() as '/' | '/access' | '/get-started'
  const indexTour = ROUTES_TOUR[pathname]
  const showNavigateBack = indexTour !== 0

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-red-950">
        <View className="flex-1 px-6 pt-7">
          <Header showNavigateBack={showNavigateBack} />
          <Slot />
          <TourStep />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
