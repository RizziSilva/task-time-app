import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@pages'

type StackProps = {
  Login: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}
