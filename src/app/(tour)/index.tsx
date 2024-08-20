import Doctors from '@/src/assets/doctors.svg'
import { DescriptionTour } from '@/src/components/description-tour'
import React from 'react'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="my-12 h-[360px] w-[380px]">
        <Doctors />
      </View>
      <DescriptionTour
        title={'Bem-vindo ao\nApp Don Saúde'}
        subtitle={
          'O app da Don para fazer seus atendimentos\nsózinho, veja como é simples!'
        }
      />
    </View>
  )
}
