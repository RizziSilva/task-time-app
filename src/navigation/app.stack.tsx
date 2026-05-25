import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppLayout } from '@layout'
import { Timer } from '@pages'

type StackProps = {
  Timer: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

export function AppStack() {
  return (
    <Stack.Navigator screenLayout={({ children }) => <AppLayout>{children}</AppLayout>} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Timer' component={Timer} />
    </Stack.Navigator>
  )
}
