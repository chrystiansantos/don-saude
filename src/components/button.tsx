import clsx from 'clsx'
import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  title: string
  customClassName?: string
  disabled?: boolean
  onPress: () => void
}

export function Button({
  variant = 'primary',
  customClassName = '',
  title,
  disabled = false,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      className={clsx(
        'h-11 w-full items-center justify-center',
        {
          'rounded-full bg-red-800': variant === 'primary',
          'opacity-50': disabled,
        },
        customClassName,
      )}
      onPress={onPress}
    >
      <Text
        className={clsx('font-bold', {
          'text-white': variant === 'primary',
          'text-red-800': variant === 'secondary',
        })}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
