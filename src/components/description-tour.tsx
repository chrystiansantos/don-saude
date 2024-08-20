import { Text, View } from 'react-native'

interface DescriptionTourProps {
  title: string
  subtitle: string
}

export function DescriptionTour({ title, subtitle }: DescriptionTourProps) {
  return (
    <View className="w-full flex-1 gap-y-5">
      <Text className="text-left text-lg font-bold leading-[150%] tracking-[-0.32px] text-white">
        {title}
      </Text>
      <Text className="text-base leading-[100%] text-white">{subtitle}</Text>
    </View>
  )
}
