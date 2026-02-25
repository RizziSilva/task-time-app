import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthLayout } from '@layout'
import { Login } from '@pages'

type StackProps = {
  Login: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

export function AuthStack() {
  return (
    <Stack.Navigator layout={({ children }) => <AuthLayout>{children}</AuthLayout>} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}
