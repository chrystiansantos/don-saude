import { CaretDown, Eye, EyeClosed } from 'phosphor-react-native'
import { ReactNode, useState } from 'react'
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'

interface InputProps extends TextInputProps {
  children: ReactNode
  isPassword?: boolean
  isPhone?: boolean
}

interface LabelProps {
  children: ReactNode
}

function Input({
  children,
  isPassword = false,
  isPhone = false,
  ...rest
}: InputProps) {
  const [hidePassword, setHidePassword] = useState(isPassword)

  function handleHidePassoword() {
    setHidePassword((oldValue) => !oldValue)
  }

  return (
    <View className="gap-y-1">
      {children}
      <View className="w-full flex-row items-center rounded-xl border border-[#D0D5DD] px-3.5">
        {isPhone && (
          <View className="mr-2 h-full flex-row items-center">
            <Text className="mr-1 font-regular text-sm text-slate-950">
              +55
            </Text>
            <CaretDown size={20} color="#667085" />
          </View>
        )}
        <TextInput
          className="h-10 flex-1"
          secureTextEntry={hidePassword}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity activeOpacity={0.7} onPress={handleHidePassoword}>
            {hidePassword ? (
              <EyeClosed size={16} color="#475467" />
            ) : (
              <Eye size={16} color="#475467" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

function Label({ children }: LabelProps) {
  return (
    <Text className="font-regular text-sm leading-[150%] text-slate-500">
      {children}
    </Text>
  )
}

Input.Label = Label

export { Input }
