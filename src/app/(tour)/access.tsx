import DoctorCall from '@/src/assets/doctor-call.svg'
import { DescriptionTour } from '@/src/components/description-tour'
import React from 'react'
import { View } from 'react-native'

export default function RegisterTour() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="my-12 h-[360px] w-[380px]">
        <DoctorCall />
      </View>
      <DescriptionTour
        title={'Acesse ou cadastre-se\nno App!'}
        subtitle={
          'Você tem acesso a solicitar atendimentos,\nacompanhar e ao exclusivo CLUB DON!'
        }
      />
    </View>
  )
}
