import clsx from 'clsx'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface CircleButtonProps {
  onPress: () => void
  customClassName?: string
  children: ReactNode
}

export function CircleButton({
  children,
  customClassName,
  onPress,
}: CircleButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={clsx(
        'h-14 w-14 items-center justify-center rounded-full bg-white',
        customClassName,
      )}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}
