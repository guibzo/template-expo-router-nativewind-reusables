import { Stack } from 'expo-router'

export const Router = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(public)' />
    </Stack>
  )
}
