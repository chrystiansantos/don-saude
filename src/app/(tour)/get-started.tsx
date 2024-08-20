import Orthopedic from '@/src/assets/orthopedic.svg'
import { DescriptionTour } from '@/src/components/description-tour'
import React from 'react'
import { View } from 'react-native'

export default function RegisterTour() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="my-12 h-[360px] w-[380px] justify-center">
        <Orthopedic className="" />
      </View>
      <DescriptionTour
        title={'Vamos\ncomeçar?'}
        subtitle={
          'Entre ou cadastre-se para começar\na aproveitar o app Don Saúde'
        }
      />
    </View>
  )
}
