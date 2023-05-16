import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="w-5 text-4xl font-bold text-white">Hello World</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
