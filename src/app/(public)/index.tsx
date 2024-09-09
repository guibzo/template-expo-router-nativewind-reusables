import { Button } from '@/components/ui/button'
import React from 'react'
import { Alert, Text, View } from 'react-native'

export default function Page() {
  const handlePress = () => {
    Alert.alert('Hello World!')
  }

  return (
    <View>
      <Text className='text-3xl font-bold'>Hello World!</Text>
      <Text className='text-lg font-medium'>Template Expo Router + NativeWind + RN Reusables</Text>

      <Button size='sm' onPress={handlePress}>
        <Text className='text-white'>Press me</Text>
      </Button>
    </View>
  )
}
