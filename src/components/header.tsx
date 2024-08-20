import LogoDark from '@/src/assets/logo-dark.svg'
import LogoLight from '@/src/assets/logo-light.svg'

import { clsx } from 'clsx'
import { router } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

const theme = {
  light: {
    IconBack: <CaretLeft size={20} color={colors.white} />,
    Logo: <LogoLight className="h-8" />,
  },
  dark: {
    IconBack: <CaretLeft size={20} color={colors.slate[800]} />,
    Logo: <LogoDark className="h-8" />,
  },
}

interface HeaderProps {
  showNavigateBack?: boolean
  headerTheme?: keyof typeof theme
}

export function Header({
  showNavigateBack = true,
  headerTheme = 'light',
}: HeaderProps) {
  return (
    <View
      className={clsx(
        'h-10 w-full flex-row items-center justify-between',
        !showNavigateBack && 'justify-end',
      )}
    >
      {showNavigateBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-10 w-10 items-center justify-center"
          onPress={() => router.back()}
        >
          {theme[headerTheme].IconBack}
        </TouchableOpacity>
      )}
      {theme[headerTheme].Logo}
    </View>
  )
}
