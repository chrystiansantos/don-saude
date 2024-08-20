import clsx from 'clsx'
import { router, usePathname } from 'expo-router'
import { CaretRight } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { red } from 'tailwindcss/colors'
import { ROUTES_TOUR } from '../enum'

export function TourStep() {
  const pathname = usePathname() as '/' | '/access' | '/get-started'
  const routesTour = Array.from(Object.keys(ROUTES_TOUR))

  function handleNavigate() {
    switch (pathname) {
      case '/':
        return router.navigate('/(tour)/access')
      case '/access':
        return router.navigate('/(tour)/get-started')
      case '/get-started':
        return router.navigate('/login')
      default:
        break
    }
  }

  return (
    <View className="mt-20 flex w-full flex-row items-center justify-between">
      <View className="flex-row gap-2">
        {routesTour.map((route) => (
          <View
            key={route}
            className={clsx(
              'h-2 w-2 rounded-full bg-red-900',
              route === pathname && 'bg-white',
            )}
          />
        ))}
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="h-14 w-14 items-center justify-center rounded-full bg-white"
        onPress={handleNavigate}
      >
        <CaretRight size={24} color={red[800]} />
      </TouchableOpacity>
    </View>
  )
}
