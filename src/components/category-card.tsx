import { Text, View } from 'react-native'

interface CategoryCardProps {
  icon: JSX.Element
  title: string
}

export function CategoryCard({ icon, title }: CategoryCardProps) {
  return (
    <View className="h-[102px] w-[82px] items-center justify-center rounded-3xl bg-white">
      {icon}
      <Text className="pt-3 font-regular text-xs text-slate-500">{title}</Text>
    </View>
  )
}
